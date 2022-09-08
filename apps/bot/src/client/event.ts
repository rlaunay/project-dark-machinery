import { MiraClient } from 'client';
import { ClientEvents } from 'discord.js';

// public on<K extends keyof ClientEvents>(event: K, listener: (...args: ClientEvents[K]) => Awaitable<void>): this;

export type DiscordEvent<K extends keyof ClientEvents> = {
  name: K,
  once?: boolean,
  execute: (client: MiraClient, ...args: ClientEvents[K]) => void
}