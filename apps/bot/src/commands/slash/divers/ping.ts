import { SlashCommand } from 'client/commad';
import { ApplicationCommandType, SlashCommandBuilder } from 'discord.js';

const ping: SlashCommand = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Ping'),
  execute(interaction) {
    console.log('oui');
  },
};

export default ping;