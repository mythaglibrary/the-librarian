import {
  AttachmentBuilder,
  EmbedBuilder,
  SlashCommandBuilder,
} from "discord.js";

const tierlistDpsFile = new AttachmentBuilder(
  "./attachments/tierlist-dps.jpg",
  {
    name: "tierlist-dps.jpg",
  },
);

const tierlistSupportFile = new AttachmentBuilder(
  "./attachments/tierlist-support.jpg",
  {
    name: "tierlist-support.jpg",
  },
);

export default {
  data: new SlashCommandBuilder()
    .setName("tierlist")
    .setDescription("A general tierlist for dps and supports"),

  async execute(interaction) {
    const tierlistDPS = new EmbedBuilder()
      .setTitle("DPS")
      .setImage("attachment://tierlist-dps.jpg")
      .setColor(0xcb2957);

    const tierlistSupport = new EmbedBuilder()
      .setTitle("Support")
      .setImage("attachment://tierlist-support.jpg")
      .setColor(0x7ae2cf);

    await interaction.reply({
      embeds: [tierlistDPS, tierlistSupport],
      files: [tierlistDpsFile, tierlistSupportFile],
    });
  },
};
