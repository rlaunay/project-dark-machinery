import { BaseInteraction, ChatInputCommandInteraction, CommandInteraction, ContextMenuCommandBuilder, MessageContextMenuCommandInteraction, RESTPostAPIApplicationCommandsJSONBody, SlashCommandBuilder, UserContextMenuCommandInteraction } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import { clientId, guildId, token } from 'config/env';
import { MiraClient } from 'client';


type Executor<T> = (client: MiraClient, interaction: T) => void;

export type CommandsJSON = RESTPostAPIApplicationCommandsJSONBody[]

export enum CommandType {
  slash = 'slash',
  user = 'user',
  message = 'message'
}

export type CommandData = {
  [CommandType.slash]: {
    data: SlashCommandBuilder;
    exec: Executor<ChatInputCommandInteraction>;
  };
  [CommandType.user]: {
    data: ContextMenuCommandBuilder;
    exec: Executor<UserContextMenuCommandInteraction>;
  };
  [CommandType.message]: {
    data: ContextMenuCommandBuilder;
    exec: Executor<MessageContextMenuCommandInteraction>;
  }
}

export type Command<K extends CommandType> = {
  data: CommandData[K]['data'];
  execute: CommandData[K]['exec'];
}

// export type Command = {
//   data: SlashCommandBuilder | ContextMenuCommandBuilder;
//   execute: Executor<ChatInputCommandInteraction | UserContextMenuCommandInteraction | MessageContextMenuCommandInteraction>;
// }

// export type SlashCommand = {
//   data: SlashCommandBuilder;
//   execute: Executor<ChatInputCommandInteraction>;
// }

// export type UserCommand = {
//   data: ContextMenuCommandBuilder;
//   execute: Executor<UserContextMenuCommandInteraction>;
// }

// export type MessageCommand = {
//   data: ContextMenuCommandBuilder;
//   execute: Executor<MessageContextMenuCommandInteraction>;
// }

const rest = new REST({ version: '10' }).setToken(token);

export async function deploy(commands: CommandsJSON) {
  try {
    const data = await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

    console.log(`Successfully registered ${(data as { length: number }).length} application commands.`);
  } catch (e) {
    console.error(e);
  }
}