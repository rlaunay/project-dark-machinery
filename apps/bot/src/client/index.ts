import { Client, Collection, GatewayIntentBits } from 'discord.js';
import { SlashCommand } from './SlashCommad';

export class MiraClient extends Client {
  commands: Collection<string, SlashCommand> = new Collection();

  constructor() {
    super({ intents: [GatewayIntentBits.Guilds] });
  }

  async run(token: string) {
    this.login(token);
  }

}