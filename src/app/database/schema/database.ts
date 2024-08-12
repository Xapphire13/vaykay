import type TripsTable from "./trips-table";
import type UsersTable from "./users-table";

export default interface Database {
  trips: TripsTable;
  users: UsersTable;
}
