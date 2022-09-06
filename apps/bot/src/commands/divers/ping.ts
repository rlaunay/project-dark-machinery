import { SlashCommandBuilder } from 'discord.js';
import { SlashCommand } from '../../client/SlashCommad';

export class Ping implements SlashCommand {
  data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Check bot ping');

  async execute(interaction) {
    interaction;
  }
}