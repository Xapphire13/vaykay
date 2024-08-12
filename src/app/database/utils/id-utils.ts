import { customAlphabet } from "nanoid";
import { alphanumeric } from "nanoid-dictionary";

const nanoid = customAlphabet(alphanumeric, 6);

export async function generateNewId(
  checkForCollision: (newId: string) => Promise<boolean>
) {
  let id;

  do {
    const newId = nanoid();
    const collides = await checkForCollision(newId);

    if (!collides) {
      id = newId;
    }
  } while (!id);

  return id;
}
