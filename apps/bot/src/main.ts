import { token } from './config/env';
import { MiraClient } from './client';

const client = new MiraClient();

client.run(token);
