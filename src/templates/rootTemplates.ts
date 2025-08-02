export const indexTsxContent = `
import { createRoot } from 'react-dom/client';
import { App } from './App';

const root = createRoot(document.getElementById('root')!);
root.render(<App />);
`;

export const appTsxContent = `
import { FC } from 'react';

export const App: FC = () => {
  return (
    <div>
      <h1>Welcome to FSD React App</h1>
    </div>
  );
};
`;

export const styleModulesDeclaration = `
declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.less' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
`;