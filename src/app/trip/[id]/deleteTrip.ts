"use server";

import db from "@/app/database";
import { revalidatePath } from "next/cache";

export async function deleteTrip(id: string) {
  await db.deleteFrom("trips").where("trip_id", "=", id).execute();
  revalidatePath("/");
}
