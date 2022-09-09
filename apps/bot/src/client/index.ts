import { ActivityType, Client, ClientEvents, Collection, GatewayIntentBits } from 'discord.js';
import { Command, CommandsJSON, CmdType, deploy } from 'client/commad';
import { getFoldersPath, getScriptFilesPath, importFiles, ROOT } from 'utils/file';
import { resolve } from 'path';
import { DiscordEvent } from './event';

export class MiraClient extends Client {
  slashCommands: Collection<string, Command<CmdType.slash>> = new Collection();
  userCommands: Collection<string, Command<CmdType.user>> = new Collection();
  messageCommands: Collection<string, Command<CmdType.message>> = new Collection();

  constructor() {
    super({
      intents: [GatewayIntentBits.Guilds],
      presence: { activities: [{ name: 'salut!', type: ActivityType.Watching }] },
    });
  }

  private async commandHandler() {
    const commands: CommandsJSON = [];

    const slashCommandsPath = resolve(ROOT, 'commands', 'slash');
    const userCommandsPath = resolve(ROOT, 'commands', 'user');
    const messageCommandsPath = resolve(ROOT, 'commands', 'message');

    const slashCommandsFilesPath = getFoldersPath(slashCommandsPath).flatMap(getScriptFilesPath);
    const userCommandsFilesPath = getScriptFilesPath(userCommandsPath);
    const messageCommandsFilesPath = getScriptFilesPath(messageCommandsPath);

    const commandsList: [string[], Collection<string, Command<CmdType>>][] = [
      [slashCommandsFilesPath, this.slashCommands],
      [userCommandsFilesPath, this.userCommands],
      [messageCommandsFilesPath, this.messageCommands],
    ];

    await Promise.all(commandsList.map(([paths, cmdsMap]) => {
      return importFiles<Command<CmdType>>(paths, (cmd) => {
        cmdsMap.set(cmd.data.name, cmd);
        commands.push(cmd.data.toJSON());
      });
    }));

    await deploy(commands);
  }

  private async eventHandler() {
    const eventsFolderPath = resolve(ROOT, 'events');
    const eventsFilesPath = getScriptFilesPath(eventsFolderPath);

    await importFiles<DiscordEvent<keyof ClientEvents>>(eventsFilesPath, (event) => {
      if (event.once) {
        this.once(event.name, (...args) => event.execute(this, ...args));
      } else {
        this.on(event.name, (...args) => event.execute(this, ...args));
      }
    });

  }

  async run(token: string) {
    await this.commandHandler();
    await this.eventHandler();
    this.login(token);
  }
}