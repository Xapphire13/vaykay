"use server";
import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";
import db from ".";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { getAuthenticatedRequestContext } from "./utils/request-context";

const nanoid = customAlphabet(alphanumeric, 6);

export type Trip = Awaited<ReturnType<typeof fetchTrips>>[number];

const TRIP_SELECT_EXPRESSION = [
  "trip_id as id",
  "name",
  "start_date as startDate",
  "end_date as endDate",
  "user_id as userId",
] as const;

export async function fetchTrips() {
  const requestContext = await getAuthenticatedRequestContext();
  const rows = await db
    .selectFrom("trips")
    .select(TRIP_SELECT_EXPRESSION)
    .where("user_id", "=", requestContext.userId)
    .execute();

  return rows;
}

export async function getTrip(id: string) {
  const requestContext = await getAuthenticatedRequestContext();

  return await db
    .selectFrom("trips")
    .select(TRIP_SELECT_EXPRESSION)
    .where("trip_id", "=", id)
    .where("user_id", "=", requestContext.userId)
    .executeTakeFirst();
}

export async function deleteTrip(id: string) {
  const requestContext = await getAuthenticatedRequestContext();
  await db
    .deleteFrom("trips")
    .where("trip_id", "=", id)
    .where("user_id", "=", requestContext.userId)
    .execute();
  revalidatePath("/");
}

export default async function createNewTrip(formData: FormData) {
  const requestContext = await getAuthenticatedRequestContext();
  const id = nanoid();

  const name = formData.get("name")?.toString();
  const startDate = formData.get("dates_start")?.toString();
  const endDate = formData.get("dates_end")?.toString();

  if (!name) throw new Error("Trip name is required");

  try {
    await db
      .insertInto("trips")
      .values({
        trip_id: id,
        name,
        start_date: startDate,
        end_date: endDate,
        user_id: requestContext.userId,
      })
      .execute();
  } catch (e) {
    let message = "Failed to create trip";
    if (process.env.NODE_ENV === "development") {
      message += `: ${e}`;
    }
    throw new Error(message);
  }

  revalidatePath("/");
  redirect("/");
}
