# The Librarian

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

Add new commands in `commands/`:
```javascript
import { SlashCommandBuilder } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('commandname')
    .setDescription('Description here'),

  async execute(interaction) {
    await interaction.reply('Response here');
  },
};
```

After creating a command, run `bun run deploy` to register it with Discord.

## Content Files

For longer replies, keep the text in `content/*.md` and load it from a command. Discord renders the Markdown.

Create the file:

```markdown
Useful general guides and resources:

- [New Player Handbook](https://example.com/handbook)
- [Build Compendium](https://example.com/builds)
```

Wire it up in a command (see `commands/guides.js`):

```javascript
import { SlashCommandBuilder } from 'discord.js';
import { readFile } from 'fs/promises';

const content = await readFile(new URL('../content/yourFile.md', import.meta.url), 'utf8');

export default {
  data: new SlashCommandBuilder()
    .setName('yourCommand')
    .setDescription('...'),

  async execute(interaction) {
    await interaction.reply(content);
  },
};
```

The file is read once when the bot starts.

**Limit:** Discord caps messages at 2000 characters. If a file grows past that, you'll need to split it across multiple messages with `interaction.followUp()`.

## Slash Command Usage

More info about slash commands can be found in the [discord.js guide](https://discordjs.guide/legacy/slash-commands/advanced-creation).
