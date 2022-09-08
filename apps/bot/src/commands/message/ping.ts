import { MessageCommand } from 'client/commad';
import { ApplicationCommandType, ContextMenuCommandBuilder } from 'discord.js';

const ping: MessageCommand = {
  data: new ContextMenuCommandBuilder().setName('ping').setType(ApplicationCommandType.Message),
  execute(interaction) {
    console.log('oui');
  },
};

export default ping;