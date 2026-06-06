import { MessageFlags, SlashCommandBuilder } from "discord.js";
import { readFile } from "fs/promises";

const content = await readFile(
  new URL(import.meta.resolve("content/banner.md")),
  "utf8",
);

export default {
  data: new SlashCommandBuilder()
    .setName("banners")
    .setDescription("Anniversary banners and packs value breakdowns"),

  async execute(interaction) {
    await interaction.reply({ content, flags: MessageFlags.SuppressEmbeds });
  },
};
