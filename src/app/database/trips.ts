"use server";
import db from ".";
import { revalidatePath } from "next/cache";
import { customAlphabet } from "nanoid";
import alphanumeric from "nanoid-dictionary/alphanumeric";
import { redirect } from "next/navigation";

const nanoid = customAlphabet(alphanumeric, 6);

export type Trip = Awaited<ReturnType<typeof fetchTrips>>[number];

export async function fetchTrips() {
  const rows = await db
    .selectFrom("trips")
    .select([
      "trip_id as id",
      "name",
      "location",
      "start_date as startDate",
      "end_date as endDate",
    ])
    .execute();

  return rows;
}

export async function deleteTrip(id: string) {
  await db.deleteFrom("trips").where("trip_id", "=", id).execute();
  revalidatePath("/");
}

export default async function createNewTrip(formData: FormData) {
  let id;

  do {
    const newId = nanoid();
    const res = await db
      .selectFrom("trips")
      .select("trip_id")
      .where("trip_id", "=", newId)
      .executeTakeFirst();

    if (!res) {
      id = newId;
    }
  } while (!id);

  const name = formData.get("name")?.toString();
  const startDate = formData.get("dates_start")?.toString();
  const endDate = formData.get("dates_end")?.toString();

  if (!name) {
    throw new Error("Trip name is required");
  }

  try {
    await db
      .insertInto("trips")
      .values({
        trip_id: id,
        name,
        start_date: startDate,
        end_date: endDate,
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
