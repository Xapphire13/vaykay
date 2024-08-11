"use server";

import { customAlphabet } from "nanoid";
import alphanumeric from "nanoid-dictionary/alphanumeric";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import db from "../database";

const nanoid = customAlphabet(alphanumeric, 6);

export default async function createNewTrip(formData: FormData) {
  const id = nanoid();
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
