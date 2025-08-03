import * as fs from 'fs/promises';
import * as path from 'path';
import inquirer from 'inquirer';
import { Preprocessor } from '../types/index.types';
export const getFsdrcContent = (preprocessor: Preprocessor) => `
{
  "preprocessor": "${preprocessor}"
}
`;

export async function readFsdrc(): Promise<Preprocessor | null> {
  const fsdrcPath = path.join(process.cwd(), '.fsdrc');
  try {
    const content = await fs.readFile(fsdrcPath, 'utf-8');
    const config = JSON.parse(content);
    if (['less', 'sass', 'scss'].includes(config.preprocessor)) {
      return config.preprocessor as Preprocessor;
    }
    return null;
  } catch {
    return null;
  }
}

export async function createFsdrc(): Promise<Preprocessor> {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'preprocessor',
      message: 'Выберите препроцессор стилей:',
      choices: [
        { name: 'LESS', value: 'less' },
        { name: 'SASS', value: 'sass' },
        { name: 'SCSS', value: 'scss' }
      ]
    }
  ]);

  const preprocessor = answers.preprocessor as Preprocessor;
  const fsdrcPath = path.join(process.cwd(), '.fsdrc');
  await fs.writeFile(fsdrcPath, getFsdrcContent(preprocessor).trim());
  console.log('.fsdrc успешно создан с препроцессором', preprocessor);
  return preprocessor;
}