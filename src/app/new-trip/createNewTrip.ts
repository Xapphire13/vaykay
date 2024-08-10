"use server";

import { sql } from "@vercel/postgres";
import { customAlphabet } from "nanoid";
import alphanumeric from "nanoid-dictionary/alphanumeric";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const nanoid = customAlphabet(alphanumeric, 6);

export default async function createNewTrip(formData: FormData) {
  const id = nanoid();
  const name = formData.get("name")?.toString();
  const startDate = formData.get("dates_start")?.toString();
  const endDate = formData.get("dates_end")?.toString();

  try {
    await sql`
    INSERT INTO Trips (trip_id, name, start_date, end_date)
    VALUES (${id}, ${name}, ${startDate}, ${endDate});
    `;
  } catch {
    throw new Error("Failed to create trip");
  }

  revalidatePath("/");
  redirect("/");
}
