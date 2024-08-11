import { createKysely } from "@vercel/postgres-kysely";
import Database from "./schema/database";

const db = createKysely<Database>();
export default db;
