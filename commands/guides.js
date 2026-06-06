import { MessageFlags, SlashCommandBuilder } from "discord.js";
import { readFile } from "fs/promises";

const content = await readFile(
  new URL(import.meta.resolve("content/guides.md")),
  "utf8",
);

export default {
  data: new SlashCommandBuilder()
    .setName("guides")
    .setDescription("A series of very usefull guides and resources"),

  async execute(interaction) {
    await interaction.reply({ content, flags: MessageFlags.SuppressEmbeds });
  },
};
