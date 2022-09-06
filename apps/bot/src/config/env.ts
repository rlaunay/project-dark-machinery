import * as dotenv from 'dotenv';
dotenv.config();

if (!process.env.BOT_TOKEN) throw new Error('No token');
if (!process.env.CLIENT_ID) throw new Error('No client ID');
if (!process.env.GUILD_ID) throw new Error('No guild ID');

export const token = process.env.BOT_TOKEN;
export const clientId = process.env.CLIENT_ID;
export const guildId = process.env.GUILD_ID;