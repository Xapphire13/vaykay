import { sql } from "@vercel/postgres";

export interface Trip {
  id: string;
  name: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

export default async function useGetTrips() {
  const { rows } = await sql`SELECT * FROM Trips`;

  return rows.map<Trip>((row) => ({
    id: row.trip_id,
    name: row.name,
    location: row.location,
    startDate: new Date(row.start_date),
    endDate: new Date(row.end_date),
  }));
}
