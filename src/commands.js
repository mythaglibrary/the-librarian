import { readdir } from "fs/promises";
import { dirname } from "path";
import { fileURLToPath } from "url";

const commandsDir = dirname(
  fileURLToPath(import.meta.resolve("commands/covenant.js")),
);

export async function commands() {
  const files = (await readdir(commandsDir)).filter((f) => f.endsWith(".js"));

  return Promise.all(
    files.map((f) => import(`commands/${f}`).then((m) => m.default)),
  );
}
