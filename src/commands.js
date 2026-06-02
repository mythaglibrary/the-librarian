import { readdir } from "fs/promises";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const commandsDir = join(
  dirname(fileURLToPath(import.meta.url)),
  "..",
  "commands",
);

export async function commands() {
  const files = (await readdir(commandsDir)).filter((f) => f.endsWith(".js"));

  return Promise.all(
    files.map((f) => import(`../commands/${f}`).then((m) => m.default)),
  );
}
