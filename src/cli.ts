#!/usr/bin/env node
import { program } from 'commander';
import { init } from './commands/init';
import { forge } from './commands/forge';
import { add } from './commands/add';

program
  .name('forge')
  .description('FSD Forge - CLI для работы с Feature-Sliced Design архитектурой')
  .version('1.0.0');

program
  .command('init')
  .description('Инициализация базовой структуры FSD')
  .action(init);

program
  .command('add')
  .alias('a')
  .description('Добавление новой сущности (widget, feature, page)')
  .argument('<type>', 'Тип сущности (widget, feature, page)')
  .argument('<name>', 'Имя сущности')
  .option('-p, --preprocessor <preprocessor>', 'Препроцессор стилей (less, sass, scss)')
  .action(add);

program
  .command('forge')
  .description('Запуск интерактивного режима для создания сущностей')
  .action(forge);

program
  .command('help')
  .description('Показать справку')
  .action(() => {
    program.outputHelp();
  });

program.parse(process.argv);