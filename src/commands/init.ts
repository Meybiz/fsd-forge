import * as path from 'path';
import { createTsconfig } from '../config/tsconfig';
import { indexTsxContent, appTsxContent, styleModulesDeclaration } from '../templates/rootTemplates';
import { createFile, createDirectory } from '../utils/fileUtils';
import { createFsdrc } from '../config/config';

// Базовая структура FSD
const fsdStructure = {
  'src': ['index.tsx', 'App.tsx'],
  'src/app': [],
  'src/pages': [],
  'src/features': [],
  'src/widgets': [],
  'src/entities': [],
  'src/shared': [
    'ui',
    'lib',
    'config',
    'types/styleModules.d.ts'
  ]
};

export async function init() {
  try {
    // Создание .fsdrc с выбором препроцессора
    await createFsdrc();

    // Создание tsconfig.json
    await createTsconfig();

    // Создание структуры FSD
    for (const dir of Object.keys(fsdStructure)) {
      const dirPath = path.join(process.cwd(), dir);
      await createDirectory(dirPath);

      for (const file of fsdStructure[dir as keyof typeof fsdStructure]) {
        const filePath = path.join(dirPath, typeof file === 'string' ? file : file);
        if (typeof file === 'string' && !file.includes('/')) {
          if (file === 'index.tsx' && dir === 'src') {
            await createFile(filePath, indexTsxContent);
          } else if (file === 'App.tsx' && dir === 'src') {
            await createFile(filePath, appTsxContent);
          } else {
            await createFile(filePath, `// ${file} for ${dir}\n`);
          }
        } else if (file === 'types/styleModules.d.ts') {
          await createFile(filePath, styleModulesDeclaration);
        } else {
          await createDirectory(filePath);
        }
      }
    }
    console.log('FSD структура успешно создана!');
  } catch (error) {
    console.error('Ошибка при создании FSD структуры:', error);
  }
}