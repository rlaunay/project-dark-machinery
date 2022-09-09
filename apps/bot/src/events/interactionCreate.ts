import { DiscordEvent } from 'client/event';
import { InteractionType } from 'discord.js';

const interactionCreate: DiscordEvent<'interactionCreate'> = {
  name: 'interactionCreate',
  async execute(client, interaction) {
    if (interaction.type === InteractionType.ApplicationCommand) {

      try {

        if (interaction.isChatInputCommand()) {
          const command = client.slashCommands.get(interaction.commandName);
          if (!command) return;

          await command.execute(interaction, client);
        }

        if (interaction.isUserContextMenuCommand()) {
          const command = client.userCommands.get(interaction.commandName);
          if (!command) return;

          await command.execute(interaction, client);
        }

        if (interaction.isMessageContextMenuCommand()) {
          const command = client.messageCommands.get(interaction.commandName);
          if (!command) return;

          await command.execute(interaction, client);
        }

      } catch (error) {
        console.error(error);
        await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
      }
    }
  },
};

export default interactionCreate;