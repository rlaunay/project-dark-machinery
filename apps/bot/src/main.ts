import { token } from './config/env';
import { MiraClient } from './client';
import { generateDependencyReport } from '@discordjs/voice';

const client = new MiraClient();

client.run(token);

console.log(generateDependencyReport());
