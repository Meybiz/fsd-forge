import { EntityType, Preprocessor } from '../types/index.types';

export const getTemplates = (preprocessor: Preprocessor): Record<string, Record<string, (name: string) => string>> => ({
  widget: {
    [`ui/{name}.${preprocessor}`]: (name: string) => `
.${name.toLowerCase()} {
  /* Add your ${preprocessor} styles here */
}
`,
    'ui/{name}.tsx': (name: string) => `
import { FC } from 'react';
import styles from './${name}.module.${preprocessor}';

interface ${name}Props {}

export const ${name}: FC<${name}Props> = () => {
  return (
    <div className={styles.${name.toLowerCase()}}>
      ${name} Widget
    </div>
  );
};
`,
    'ui/{name}.test.tsx': (name: string) => `
import { render } from '@testing-library/react';
import { ${name} } from '../index';

describe('${name}', () => {
  it('renders without crashing', () => {
    const { container } = render(<${name} />);
    expect(container).toBeInTheDocument();
  });
});
`,
    'index.ts': (name: string) => `
export * from './ui/${name}';
`
  },
  feature: {
    [`ui/{name}.${preprocessor}`]: (name: string) => `
.${name.toLowerCase()} {
  /* Add your ${preprocessor} styles here */
}
`,
    'ui/{name}.tsx': (name: string) => `
import { FC } from 'react';
import styles from './${name}.module.${preprocessor}';

interface ${name}Props {}

export const ${name}: FC<${name}Props> = () => {
  return (
    <div className={styles.${name.toLowerCase()}}>
      ${name} Feature
    </div>
  );
};
`,
    'ui/{name}.test.tsx': (name: string) => `
import { render } from '@testing-library/react';
import { ${name} } from '../index';

describe('${name}', () => {
  it('renders without crashing', () => {
    const { container } = render(<${name} />);
    expect(container).toBeInTheDocument();
  });
});
`,
    'index.ts': (name: string) => `
export * from './ui/${name}';
`
  },
  page: {
    [`ui/{name}.${preprocessor}`]: (name: string) => `
.${name.toLowerCase()} {
  /* Add your ${preprocessor} styles here */
}
`,
    'ui/{name}.tsx': (name: string) => `
import { FC } from 'react';
import styles from './${name}.module.${preprocessor}';

interface ${name}Props {}

export const ${name}: FC<${name}Props> = () => {
  return (
    <div className={styles.${name.toLowerCase()}}>
      ${name} Page
    </div>
  );
};
`,
    'ui/{name}.test.tsx': (name: string) => `
import { render } from '@testing-library/react';
import { ${name} } from '../index';

describe('${name}', () => {
  it('renders without crashing', () => {
    const { container } = render(<${name} />);
    expect(container).toBeInTheDocument();
  });
});
`,
    'index.ts': (name: string) => `
export * from './ui/${name}';
`,
    '../../entities/{name}/api.ts': (name: string) => `
// API-запросы для ${name}
export const fetch${name}Data = async () => {
  // Реализуйте ваш API-запрос здесь
  return { data: null };
};
`,
    '../../entities/{name}/types.ts': (name: string) => `
export interface ${name}Data {
  // Определите типы данных для ${name} здесь
}
`
  }
});