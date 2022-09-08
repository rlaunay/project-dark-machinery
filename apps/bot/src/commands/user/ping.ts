import { UserCommand } from 'client/commad';
import { ApplicationCommandType, ContextMenuCommandBuilder } from 'discord.js';

const ping: UserCommand = {
  data: new ContextMenuCommandBuilder().setName('ping').setType(ApplicationCommandType.User),
  execute(interaction) {
    console.log('oui');
  },
};

export default ping;