import { ChatInputCommandInteraction, ContextMenuCommandBuilder, MessageContextMenuCommandInteraction, RESTPostAPIApplicationCommandsJSONBody, SlashCommandBuilder, UserContextMenuCommandInteraction } from 'discord.js';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import { clientId, guildId, token } from 'config/env';
import { MiraClient } from 'client';


type Executor<T> = (interaction: T, client: MiraClient) => void;

export type CommandsJSON = RESTPostAPIApplicationCommandsJSONBody[]

export enum CmdType {
  slash = 'slash',
  user = 'user',
  message = 'message'
}

export type CommandData = {
  [CmdType.slash]: {
    data: SlashCommandBuilder | Omit<SlashCommandBuilder, 'addSubcommand' | 'addSubcommandGroup'>;
    exec: Executor<ChatInputCommandInteraction>;
  };
  [CmdType.user]: {
    data: ContextMenuCommandBuilder;
    exec: Executor<UserContextMenuCommandInteraction>;
  };
  [CmdType.message]: {
    data: ContextMenuCommandBuilder;
    exec: Executor<MessageContextMenuCommandInteraction>;
  }
}

export type Command<K extends CmdType> = {
  data: CommandData[K]['data'];
  execute: CommandData[K]['exec'];
}

const rest = new REST({ version: '10' }).setToken(token);

export async function deploy(commands: CommandsJSON) {
  try {
    const data = await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

    console.log(`Successfully registered ${(data as { length: number }).length} application commands.`);
  } catch (e) {
    console.error(e);
  }
}