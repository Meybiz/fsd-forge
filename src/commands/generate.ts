import * as path from 'path';
import { EntityType, Preprocessor } from '../types/index.types';
import { readFsdrc } from '../config/config';
import { getTemplates } from '../templates/entityTemplates';
import { createFile, createDirectory } from '../utils/fileUtils';
import { validateEntityName } from '../utils/validateEntityName';

export async function generate(type: EntityType, name: string, options: { preprocessor?: Preprocessor }) {
  if (!['widget', 'feature', 'page'].includes(type)) {
    console.error('Неверный тип сущности. Доступные типы: widget, feature, page');
    return;
  }
  const validationResult = validateEntityName(name);
  if (validationResult !== true) {
    console.error(validationResult);
    return;
  }
  if (options.preprocessor && !['less', 'sass', 'scss'].includes(options.preprocessor)) {
    console.error('Неверный препроцессор. Доступные варианты: less, sass, scss');
    return;
  }

  const basePath = path.join(process.cwd(), `src/${type}s`, name);
  try {
    // Чтение препроцессора из .fsdrc, если не передан
    const resolvedPreprocessor = options.preprocessor || (await readFsdrc()) || 'scss';
    const entityTemplates = getTemplates(resolvedPreprocessor)[type];
    await createDirectory(basePath);

    for (const [fileNameTemplate, templateFn] of Object.entries(entityTemplates)) {
      const fileName = fileNameTemplate.replace('{name}', name);
      const filePath = path.join(basePath, fileName);
      await createFile(filePath, templateFn(name));
    }

    console.log(`${type} "${name}" успешно создан в src/${type}s/${name} с препроцессором ${resolvedPreprocessor}`);
  } catch (error) {
    console.error(`Ошибка при создании ${type} "${name}":`, error);
  }
}