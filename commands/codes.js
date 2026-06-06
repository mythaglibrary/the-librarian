import { MessageFlags, SlashCommandBuilder } from "discord.js";
import { readFile } from "fs/promises";

const content = await readFile(
  new URL(import.meta.resolve("content/codes.md")),
  "utf8",
);

export default {
  data: new SlashCommandBuilder()
    .setName("codes")
    .setDescription("All the active promotional codes"),

  async execute(interaction) {
    await interaction.reply({ content, flags: MessageFlags.SuppressEmbeds });
  },
};
