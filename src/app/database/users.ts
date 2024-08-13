"use server";
import { redirect } from "next/navigation";
import db from ".";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";
import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";

const nanoid = customAlphabet(alphanumeric, 6);

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

  const hashedPassword = await bcrypt.hash(password, 8);

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

  cookies().set({ name: "currentUser", value: id, path: "/" });
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

  cookies().set({ name: "currentUser", value: userId, path: "/" });
  redirect("/");
}
