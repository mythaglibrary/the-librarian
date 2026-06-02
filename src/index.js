import { createServer } from "node:http";
import { Client, Collection, GatewayIntentBits } from "discord.js";
import { commands } from "./commands.js";

createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("OK");
}).listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.info(`Health server listening on 0.0.0.0:${process.env.PORT || 3000}`);
});

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const command of await commands()) {
  client.commands.set(command.data.name, command);
}

client.on("ready", () => {
  console.info(`Logged in as ${client.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);

    await interaction.reply("An error occurred while executing the command");
  }
});

client.login(process.env.TOKEN);
