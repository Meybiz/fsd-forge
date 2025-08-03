import inquirer from 'inquirer';
import { readFsdrc } from '../config/config';
import { add } from './add';
import { validateEntityName } from '../utils/validateEntityName';

export async function forge() {
  const configPreprocessor = await readFsdrc();
  const questions: any[] = [
    {
      type: 'list',
      name: 'entityType',
      message: 'Выберите тип сущности:',
      choices: [
        { name: 'Widget', value: 'widget' },
        { name: 'Feature', value: 'feature' },
        { name: 'Page', value: 'page' }
      ]
    },
    {
      type: 'input',
      name: 'entityName',
      message: 'Введите название сущности (на английском, в PascalCase, например, HomePage):',
      validate: validateEntityName
    }
  ];

  if (!configPreprocessor) {
    questions.push({
      type: 'list',
      name: 'preprocessor',
      message: 'Выберите препроцессор стилей:',
      choices: [
        { name: 'LESS', value: 'less' },
        { name: 'SASS', value: 'sass' },
        { name: 'SCSS', value: 'scss' }
      ]
    });
  }

  const answers = await inquirer.prompt(questions);
  await add(answers.entityType, answers.entityName, { preprocessor: answers.preprocessor || configPreprocessor });
}