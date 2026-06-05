import { SlashCommandBuilder } from "discord.js";
import { readFile } from "fs/promises";

const guides = {
  arachne: await readFile(
    new URL("../content/characters/arachne.md", import.meta.url),
    "utf8",
  ),
    castor: await readFile(
    new URL("../content/characters/castor.md", import.meta.url),
    "utf8",
  ),
    clementine: await readFile(
    new URL("../content/characters/clementine.md", import.meta.url),
    "utf8",
  ),
    corpo: await readFile(
    new URL("../content/characters/corpo.md", import.meta.url),
    "utf8",
  ),
    daffodil: await readFile(
    new URL("../content/characters/daffodil.md", import.meta.url),
    "utf8",
  ),
    gdoll: await readFile(
    new URL("../content/characters/gdoll.md", import.meta.url),
    "utf8",
  ),
    ghelot: await readFile(
    new URL("../content/characters/ghelot.md", import.meta.url),
    "utf8",
  ),
    gmurphy: await readFile(
    new URL("../content/characters/gmurphy.md", import.meta.url),
    "utf8",
  ),
    jenkin: await readFile(
    new URL("../content/characters/jenkin.md", import.meta.url),
    "utf8",
  ),
    kath: await readFile(
    new URL("../content/characters/kath.md", import.meta.url),
    "utf8",
  ),
    miryam: await readFile(
    new URL("../content/characters/miryam.md", import.meta.url),
    "utf8",
  ),
    mouchette: await readFile(
    new URL("../content/characters/mouchette.md", import.meta.url),
    "utf8",
  ),
    pollux: await readFile(
    new URL("../content/characters/pollux.md", import.meta.url),
    "utf8",
  ),
    saya: await readFile(
    new URL("../content/characters/saya.md", import.meta.url),
    "utf8",
  ),
    vortice: await readFile(
    new URL("../content/characters/vortice.md", import.meta.url),
    "utf8",
  ),
    xu: await readFile(
    new URL("../content/characters/xu.md", import.meta.url),
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
          { name: "Castor", value: "castor" },
          { name: "Clementine", value: "clementine" },
          { name: "Corpo", value: "corpo" },
          { name: "Daffodil", value: "daffodil" },
          { name: "Gdoll", value: "gdoll" },
          { name: "Ghelot", value: "ghelot" },
          { name: "Gmurphy", value: "gmurphy" },
          { name: "Jenkin", value: "jenkin" },
          { name: "Kath", value: "kath" },
          { name: "Miryam", value: "miryam" },
          { name: "Mouchette", value: "mouchette" },
          { name: "Pollux", value: "pollux" },
          { name: "Saya", value: "saya" },
          { name: "Vortice", value: "vortice" },
          { name: "Xu", value: "xu" },
        ),
    ),

  async execute(interaction) {
    const character = interaction.options.getString("character");
    const content = guides[character];

    await interaction.reply({ content });
  },
};
