"use server";
import { redirect } from "next/navigation";
import db from ".";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";
import jwt from "jsonwebtoken";
import ms from "ms";
import { getJwtSecret, hashPassword } from "./utils/auth";
import { getAuthenticatedRequestContext } from "./utils/request-context";

const nanoid = customAlphabet(alphanumeric, 6);

function setAuthCookies(userId: string) {
  const authToken = jwt.sign({ userId }, getJwtSecret(), {
    expiresIn: "30d",
  });

  const cookieExpiry = Date.now() + ms("30d");

  const cookieStore = cookies();
  cookieStore.set({
    name: "currentUser",
    value: userId,
    path: "/",
    expires: cookieExpiry,
  });
  cookieStore.set({
    name: "authToken",
    value: authToken,
    path: "/",
    httpOnly: true,
    secure: true,
    expires: cookieExpiry,
  });
}

export async function createUser(formData: FormData) {
  const id = nanoid();

  const username = formData.get("username")?.toString();
  const email = formData.get("email")?.toString();
  const firstName = formData.get("firstName")?.toString();
  const lastName = formData.get("lastName")?.toString();
  const password = formData.get("password")?.toString();
  const createdAt = new Date();

  if (!username) throw new Error("Username is required");
  if (!password) throw new Error("Password is required");
  if (!email) throw new Error("Email is required");

  const hashedPassword = await hashPassword(password);

  try {
    await db
      .insertInto("users")
      .values({
        user_id: id,
        username,
        email,
        first_name: firstName,
        last_name: lastName,
        created_at: createdAt,
        updated_at: createdAt,
        password_hash: hashedPassword,
      })
      .execute();
  } catch {
    throw new Error("Couldn't create user");
  }

  setAuthCookies(id);
  redirect("/");
}

export async function authenticate(formData: FormData) {
  const username = formData.get("username")?.toString();
  const password = formData.get("password")?.toString();

  if (!username) throw new Error("Username is required");
  if (!password) throw new Error("Password is required");

  let userId;

  try {
    const user = await db
      .selectFrom("users")
      .select(["user_id", "password_hash"])
      .where("username", "=", username)
      .executeTakeFirstOrThrow();

    const passwordMatches = await bcrypt.compare(password, user.password_hash);

    if (!passwordMatches) {
      throw new Error("Invalid password");
    }

    userId = user.user_id;
  } catch (e) {
    let message = "Invalid username or password";
    if (process.env.NODE_ENV === "development") {
      message += `: ${e}`;
    }
    throw new Error(message);
  }

  setAuthCookies(userId);
  redirect("/");
}

export async function getUser() {
  const requestContext = await getAuthenticatedRequestContext();

  if (!requestContext) return null;

  const user = await db
    .selectFrom("users")
    .select([
      "user_id as id",
      "username",
      "email",
      "first_name as firstName",
      "last_name as lastName",
      "created_at as createdAt",
      "updated_at as updatedAt",
    ])
    .where("user_id", "=", requestContext.userId)
    .executeTakeFirstOrThrow();

  return user;
}

export async function updatePassword(_: unknown, formData: FormData) {
  const requestContext = await getAuthenticatedRequestContext();
  const oldPassword = formData.get("currentPassword")?.toString();
  const newPassword = formData.get("newPassword")?.toString();

  if (!requestContext) return { error: "Unauthorized" };
  if (!oldPassword) return { error: "Current password is required" };
  if (!newPassword) return { error: "New password is required" };

  const user = await db
    .selectFrom("users")
    .select("password_hash")
    .where("user_id", "=", requestContext.userId)
    .executeTakeFirstOrThrow();

  if (!(await bcrypt.compare(oldPassword, user.password_hash))) {
    return {
      error: "Invalid current password",
    };
  }

  const newPasswordHash = await hashPassword(newPassword);

  try {
    await db
      .updateTable("users")
      .where("user_id", "=", requestContext.userId)
      .set({ password_hash: newPasswordHash })
      .execute();
  } catch {
    return { result: false };
  }

  return { result: true };
}
