# Erica

## Setup

1. Install dependencies:
   ```bash
   bun install
   ```

2. Create a `.env` file:
   ```
   APP_ID=
   TOKEN=
   ```

3. Register commands with Discord:
   ```bash
   bun run deploy
   ```

4. Run the bot:
   ```bash
   bun run dev   # development
   bun run start # production
   ```

## Creating Commands

All commands load their content from Markdown files in `content/`. Discord renders the Markdown.

1. Create the content file in `content/`:

   ```markdown
   Lorem ipsum dolor sit amet:

   - [Lorem](https://example.com/lorem)
   - [Ipsum](https://example.com/ipsum)
   ```

2. Wire it up in `commands/`:

   ```javascript
   import { MessageFlags, SlashCommandBuilder } from 'discord.js';
   import { readFile } from 'fs/promises';

   const content = await readFile(
     new URL(import.meta.resolve("content/yourFile.md")),
     "utf8",
   );

   export default {
     data: new SlashCommandBuilder()
       .setName('yourCommand')
       .setDescription('Lorem ipsum dolor sit amet'),

     async execute(interaction) {
       await interaction.reply({ content, flags: MessageFlags.SuppressEmbeds });
     },
   };
   ```

   The file is read once when the bot starts.

3. Run `bun run deploy` to register the new command with Discord.

**Limit:** Discord caps messages at 2000 characters. If a file grows past that, split it across multiple messages with `interaction.followUp()`.

## How do I do things?

More info on what can be done and how: [discord.js guide](https://discordjs.guide/)
