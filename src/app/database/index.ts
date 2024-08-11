import { createKysely } from "@vercel/postgres-kysely";
import type Database from "./schema/database";

const db = createKysely<Database>();
export default db;
