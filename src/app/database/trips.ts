"use server";
import db from ".";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { generateNewId } from "./utils/id-utils";

export type Trip = Awaited<ReturnType<typeof fetchTrips>>[number];

const TRIP_SELECT_EXPRESSION = [
  "trip_id as id",
  "name",
  "start_date as startDate",
  "end_date as endDate",
  "user_id as userId",
] as const;

export async function fetchTrips() {
  const rows = await db
    .selectFrom("trips")
    .select(TRIP_SELECT_EXPRESSION)
    .execute();

  return rows;
}

export async function getTrip(id: string) {
  return await db
    .selectFrom("trips")
    .select(TRIP_SELECT_EXPRESSION)
    .where("trip_id", "=", id)
    .executeTakeFirst();
}

export async function deleteTrip(id: string) {
  await db.deleteFrom("trips").where("trip_id", "=", id).execute();
  revalidatePath("/");
}

export default async function createNewTrip(formData: FormData) {
  const id = await generateNewId(async (newId) => {
    const res = await db
      .selectFrom("trips")
      .select("trip_id")
      .where("trip_id", "=", newId)
      .executeTakeFirst();

    return !!res;
  });

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
        user_id: "", // TODO
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
