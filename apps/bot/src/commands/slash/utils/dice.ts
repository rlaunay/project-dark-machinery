import { CmdType, Command } from 'client/commad';
import { SlashCommandBuilder } from 'discord.js';

const dice: Command<CmdType.slash> = {
  data: new SlashCommandBuilder()
    .setName('de')
    .setDescription('Simule un lancé de dé')
    .addIntegerOption((option) =>
      option.setName('value')
        .setDescription('Choisi la valeur max du dé')
        .setMinValue(2)),
  execute(interaction) {
    let value = interaction.options.getInteger('value');

    if (value == null) {
      value = 20;
    }

    const res = Math.floor(Math.random() * (value - 1 + 1) + 1);

    interaction.reply(`Resultat: ${res}/${value}`);
  },
};

export default dice;