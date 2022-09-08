import { Command, CommandType, MessageCommand, SlashCommand, UserCommand } from 'client/commad';
import { DiscordEvent } from 'client/event';
import { InteractionType } from 'discord.js';

const interactionCreate: DiscordEvent<'interactionCreate'> = {
  name: 'interactionCreate',
  async execute(client, interaction) {
    if (interaction.isChatInputCommand()) {
      const command = client.slashCommands.get(interaction.commandName);
      if (!command) return;

      await command.execute(client, interaction);
    }

    if (interaction.type === InteractionType.ApplicationCommand) {

      let command: Command<CommandType> | undefined;

      if (interaction.isChatInputCommand()) {
        command = client.slashCommands.get(interaction.commandName);
      }

      if (interaction.isUserContextMenuCommand()) {
        command = client.userCommands.get(interaction.commandName);
      }

      if (interaction.isMessageContextMenuCommand()) {
        command = client.messageCommands.get(interaction.commandName);
      }

      if (!command) return;

      try {
        await command.execute(client, interaction);
      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
  },
};

export default interactionCreate;