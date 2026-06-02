import { REST, Routes } from "discord.js";
import { commands } from "./commands.js";

const rest = new REST().setToken(process.env.TOKEN);
const body = (await commands()).map((c) => c.data.toJSON());

try {
  await rest.put(Routes.applicationCommands(process.env.APP_ID), { body });

  console.info(
    `Registered ${body.length} commands: ${body.map((c) => c.name).join(", ")}`,
  );
} catch (error) {
  console.error("Failed to register commands:", error);
}
