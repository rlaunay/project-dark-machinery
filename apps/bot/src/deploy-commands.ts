import { REST } from '@discordjs/rest';
import { Routes } from 'discord.js';
import path from 'path';
import fs from 'fs';
import { clientId, guildId, token } from './config/env';

const commands: unknown[] = [];
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.ts'));

console.log(commandFiles);

const rest = new REST({ version: '10' }).setToken(token);

export async function deployCommands() {
  try {
    await Promise.all(commandFiles.map(async (file) => {
      const filePath = path.join(commandsPath, file);
      const command = (await import(filePath)).default;
      commands.push(command.data.toJSON());
    }));

    const data = await rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands });

    console.log(`Successfully registered ${(data as { length: number }).length} application commands.`);
  } catch (e) {
    console.error(e);
  }
}
