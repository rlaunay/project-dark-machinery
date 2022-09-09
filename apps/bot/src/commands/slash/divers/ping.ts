import { CmdType, Command } from 'client/commad';
import { SlashCommandBuilder } from 'discord.js';

const ping: Command<CmdType.slash> = {
  data: new SlashCommandBuilder().setName('ping').setDescription('Ping'),
  async execute(interaction, client) {
    try {
      const mesg = await interaction.reply({ content: 'Pong!', fetchReply: true });

      await interaction.editReply({ content: `Pong!\nBot Latency: \`${mesg.createdTimestamp - interaction.createdTimestamp}ms\`, Websocket Latency: \`${client.ws.ping}ms\`` });
    } catch (err) {
      console.log('Something Went Wrong => ', err);
    }
  },
};

export default ping;