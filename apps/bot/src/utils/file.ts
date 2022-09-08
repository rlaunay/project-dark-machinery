import { Command } from 'client/commad';
import { readdirSync } from 'fs';
import { resolve } from 'path';

export const ROOT = resolve(__dirname, '..');

export function getFoldersPath(path: string) {
  return readdirSync(path).map(folder => resolve(path, folder));
}

export function getScriptFilesPath(path: string) {
  return readdirSync(path)
    .filter(file => file.endsWith('.js') || file.endsWith('.ts'))
    .map((file) => resolve(path, file));
}

// export async function importFilesCommad<T>(filesPath: string[], cb: (file: T) => void) {
//   await Promise.all(filesPath.map(async (filePath) => {
//     const file = (await import(filePath)).default as T;
//     cb(file);
//   }));
// }

export async function importFiles<T>(filesPath: string[], cb: (file: T) => void) {
  await Promise.all(filesPath.map(async (filePath) => {
    const file = (await import(filePath)).default;
    cb(file);
  }));
}