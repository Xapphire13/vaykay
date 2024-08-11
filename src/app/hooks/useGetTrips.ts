import db from "../database";

export type Trip = Awaited<ReturnType<typeof useGetTrips>>[number];

export default async function useGetTrips() {
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
