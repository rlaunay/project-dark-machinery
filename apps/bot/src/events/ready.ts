import { DiscordEvent } from 'client/event';

const ready: DiscordEvent<'ready'> = {
  name: 'ready',
  once: true,
  execute(client) {
    console.log(`Ready! Logged in as ${client.user?.tag}`);
  },
};

export default ready;