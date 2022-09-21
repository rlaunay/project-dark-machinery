import { CmdType, Command } from 'client/commad';
import { ApplicationCommandType, ContextMenuCommandBuilder, EmbedBuilder, GuildMember } from 'discord.js';

const info: Command<CmdType.user> = {
  data: new ContextMenuCommandBuilder()
    .setName('Info Utilisateur')
    .setType(ApplicationCommandType.User),
  execute(interaction) {
    const member = interaction.targetMember;

    if (!(member instanceof GuildMember)) return;

    console.log(member.user.avatarURL());

    const embed = new EmbedBuilder()
      .setColor('Gold')
      .setTitle(member.user.tag)
      .setAuthor({ name: member.user.tag, iconURL: member.user.avatarURL() || '' })
      .addFields([
        { name: 'Identifiant', value: member.id },
        { name: 'Pseudo', value: member.nickname || 'Aucuns' },
      ]);

    interaction.reply({ embeds: [embed] });
  },
};

export default info;