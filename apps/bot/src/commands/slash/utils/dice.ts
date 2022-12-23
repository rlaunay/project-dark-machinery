import { DiceRoll } from '@dice-roller/rpg-dice-roller';
import { CmdType, Command } from 'client/commad';
import { bold, SlashCommandBuilder, underscore } from 'discord.js';
import { formatDiceValue } from 'utils/format';

const dice: Command<CmdType.slash> = {
  data: new SlashCommandBuilder()
    .setName('d')
    .setDescription('Simule un lancé de dé')
    .addStringOption((option) =>
      option.setName('valeur')
        .setDescription('Choisi la valeur max du dé'))
    .addStringOption((option) =>
      option.setName('cacher')
        .setDescription('Montre le resultat seulement au lanceur')
        .addChoices(
          { name: 'Oui', value: 'oui' },
          { name: 'Non', value: 'non' },
        )),
  execute(interaction) {
    let value = interaction.options.getString('valeur');
    const hide = interaction.options.getString('cacher');

    // if (interaction.user.id === '352905078417522736') {
    //   return interaction.reply('Thomas le gros mange merde \'-\'');
    // }

    if (value == null) {
      value = '1d20';
    }

    try {
      const rolls = new DiceRoll(value);
      // console.log(rolls.notation);
      // console.log(rolls.rolls[0]);
      // console.log(rolls.total);
      return interaction.reply({
        content: `${underscore(rolls.notation)}:\n${rolls.rolls.join('\t')}\nResultat: ${bold(rolls.total.toString())}`,
        ephemeral: hide === 'oui',
      });
    } catch (e) {
      return interaction.reply('Valeur incorrect');
    }
  },
};

export default dice;