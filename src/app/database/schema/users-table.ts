import type { ColumnType } from "kysely";

export default interface UsersTable {
  user_id: string;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  created_at: Date;
  updated_at: Date;
  password_hash: ColumnType<never, string, string>;
}
