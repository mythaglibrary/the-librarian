import { MessageFlags, SlashCommandBuilder } from "discord.js";
import { readFile } from "fs/promises";

const content = await readFile(
  new URL(import.meta.resolve("content/new.md")),
  "utf8",
);

export default {
  data: new SlashCommandBuilder()
    .setName("new")
    .setDescription("Codes and Guide for new players"),

  async execute(interaction) {
    await interaction.reply({ content, flags: MessageFlags.SuppressEmbeds });
  },
};
