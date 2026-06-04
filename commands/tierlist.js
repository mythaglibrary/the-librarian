import { MessageFlags, SlashCommandBuilder } from "discord.js";
import { readFile } from "fs/promises";

const content = await readFile(
  new URL("../content/tierlist.md", import.meta.url),
  "utf8",
);

export default {
  data: new SlashCommandBuilder()
    .setName("tierlist")
    .setDescription("A general tierlist for dps and supports"),

  async execute(interaction) {
    await interaction.reply({ content, flags: MessageFlags.SuppressEmbeds });
  },
};
