import { CommandInteraction, SlashCommandBuilder } from 'discord.js';

declare module 'discord.js' {
  export interface Client {
      commands: Collection<string, SlashCommand>
  }

  export interface SlashCommand {
      data: SlashCommandBuilder,
      execute: (interaction: CommandInteraction) => void
  }
}