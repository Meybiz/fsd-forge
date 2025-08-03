import * as fs from 'fs/promises';
import * as path from 'path';

export const tsconfigContent = `
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "target": "ES2020",
    "module": "ESNext",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true,
    "outDir": "./dist",
    "moduleResolution": "node",
    "types": ["node"],
    "typeRoots": ["./src/types", "./node_modules/@types"]
  },
  "include": ["src/**/*", "src/types/**/*"]
}
`;

export async function createTsconfig() {
  const tsconfigPath = path.join(process.cwd(), 'tsconfig.json');
  try {
    await fs.access(tsconfigPath);
    console.log('tsconfig.json уже существует, пропускаем создание.');
  } catch {
    await fs.writeFile(tsconfigPath, tsconfigContent.trim());
    console.log('tsconfig.json успешно создан!');
  }
}