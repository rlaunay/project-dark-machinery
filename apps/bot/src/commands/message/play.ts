import { createAudioPlayer, createAudioResource, joinVoiceChannel } from '@discordjs/voice';
import { CmdType, Command } from 'client/commad';
import https from 'https';
import { ApplicationCommandType, ContextMenuCommandBuilder, GuildMember } from 'discord.js';

const play: Command<CmdType.message> = {
  data: new ContextMenuCommandBuilder()
    .setName('Play')
    .setType(ApplicationCommandType.Message),
  execute(interaction) {
    const { attachments } = interaction.targetMessage;
    const audioFile = attachments.filter((atch) => !!(atch.contentType && atch.contentType.startsWith('audio/'))).first();

    if (!audioFile) {
      return interaction.reply({ content: 'Aucuns fichiers audio à lire', ephemeral: true });
    }

    const { member } = interaction;

    if (!(member instanceof GuildMember)) return interaction.reply({ content: 'Non', ephemeral: true });

    console.log(member.displayName);

    const { channel } = member.voice;

    console.log(channel?.type);
    console.log(channel);

    if (!channel) return interaction.reply({ content: 'Tu n\'es pas connecter a un channel vocal !', ephemeral: true });

    const connection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
    });

    const player = createAudioPlayer();

    const resource = createAudioResource(audioFile.url);
    player.play(resource);
    connection.subscribe(player);

    return interaction.reply({ content: `Fichiers: ${audioFile.name}`, ephemeral: true });
  },
};

export default play;