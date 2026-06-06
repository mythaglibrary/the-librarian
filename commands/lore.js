import { MessageFlags, SlashCommandBuilder } from "discord.js";
import { readFile } from "fs/promises";

const content = await readFile(
  new URL(import.meta.resolve("content/lore.md")),
  "utf8",
);

export default {
  data: new SlashCommandBuilder()
    .setName("lore")
    .setDescription("Side stories reading order suggestions"),

  async execute(interaction) {
    await interaction.reply({ content, flags: MessageFlags.SuppressEmbeds });
  },
};
