export default interface UsersTable {
  user_id: string;
  username: string;
  email: string;
  first_name?: string;
  last_name?: string;
  created_at: Date;
  updated_at: Date;
}
