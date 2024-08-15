import bcrypt from "bcrypt";

export function getJwtSecret() {
  const jwtSecret = process.env.JWT_SECRET;
  if (!jwtSecret) throw new Error("JWT SECRET not defined");

  return jwtSecret;
}

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 8);
}
