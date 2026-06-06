import { MessageFlags, SlashCommandBuilder } from "discord.js";
import { readFile } from "fs/promises";

const content = await readFile(
  new URL(import.meta.resolve("content/support.md")),
  "utf8",
);

export default {
  data: new SlashCommandBuilder()
    .setName("support")
    .setDescription("How to immediatly take a whale support unit"),

  async execute(interaction) {
    await interaction.reply({ content, flags: MessageFlags.SuppressEmbeds });
  },
};
