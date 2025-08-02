import * as fs from 'fs/promises';
import * as path from 'path';

export async function createFile(filePath: string, content: string) {
  const dirPath = path.dirname(filePath);
  await fs.mkdir(dirPath, { recursive: true });
  await fs.writeFile(filePath, content.trim());
}

export async function createDirectory(dirPath: string) {
  await fs.mkdir(dirPath, { recursive: true });
}