import { SlashCommandBuilder } from "discord.js";
import { readFile } from "fs/promises";

const guides = {
  arachne: await readFile(
    new URL("../content/characters/arachne.md", import.meta.url),
    "utf8",
  ),
};

export default {
  data: new SlashCommandBuilder()
    .setName("character-guide")
    .setDescription("Look up a guide for a character")
    .addStringOption((option) =>
      option
        .setName("character")
        .setDescription("The character name to look up")
        .setRequired(true)
        .addChoices(
          { name: "Arachne", value: "arachne" },
        ),
    ),

  async execute(interaction) {
    const character = interaction.options.getString("character");
    const content = guides[character];

    await interaction.reply({ content });
  },
};
