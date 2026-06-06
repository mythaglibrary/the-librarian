import {
  AttachmentBuilder,
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";
import { readFile } from "fs/promises";
import { palette } from "src/palette.js";

const content = await readFile(
  new URL(import.meta.resolve("content/new.md")),
  "utf8",
);

const pyramidFile = new AttachmentBuilder("attachments/aurita.png", {
  name: "aurita.png",
});

export default {
  data: new SlashCommandBuilder()
    .setName("aurita")
    .setDescription("Peak"),

  async execute(interaction) {
    const pyramid = new EmbedBuilder()
      .setDescription(content)
      .setImage("attachment://aurita.png")
      .setColor(palette.sky);

    await interaction.reply({
      embeds: [Aurita],
      files: [AuritaFile],
    });
  },
};
