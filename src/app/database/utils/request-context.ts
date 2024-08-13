"use server";

import jwt from "jsonwebtoken";
import { getJwtSecret } from "./auth";
import { cookies } from "next/headers";

export default interface RequestContext {
  userId: string;
}

export async function getAuthenticatedRequestContext(): Promise<RequestContext> {
  const cookieStore = cookies();
  const authToken = cookieStore.get("authToken")?.value;

  if (!authToken) throw new Error("Auth token missing");

  const verifiedToken = jwt.verify(authToken, getJwtSecret());

  if (typeof verifiedToken !== "object" || !verifiedToken.userId) {
    throw new Error("Malformed JWT token");
  }

  return {
    userId: verifiedToken.userId,
  };
}
