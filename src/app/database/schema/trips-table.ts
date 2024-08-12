import type { ColumnType } from "kysely";

export default interface TripsTable {
  trip_id: string;
  name: string;
  start_date?: ColumnType<Date, string>;
  end_date?: ColumnType<Date, string>;
  user_id: string;
}
