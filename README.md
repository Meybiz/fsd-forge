# 🚀 FSD Forge CLI

> **A powerful Command Line Interface tool for Feature-Sliced Design architecture**

[![npm version](https://img.shields.io/npm/v/fsd-forge?style=flat-square&color=blue)](https://npmjs.com/package/fsd-forge)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-Ready-61dafb?style=flat-square&logo=react)](https://reactjs.org/)

FSD Forge streamlines the creation and management of projects following the **Feature-Sliced Design (FSD)** architecture. It helps developers initialize a robust FSD structure and generate entities like widgets, features, and pages with TypeScript, React, and CSS preprocessor support.

---

## 📋 Table of Contents

- [✨ Features](#-features)
- [📦 Installation](#-installation)
- [🛠️ Usage](#️-usage)
- [⚙️ Commands](#️-commands)
- [📝 Examples](#-examples)
- [🗂️ Project Structure](#️-project-structure)
- [⚙️ Configuration](#️-configuration)
- [🤝 Contributing](#-contributing)
- [📜 License](#-license)

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🏗️ **Initialize FSD Structure** | Set up a clean Feature-Sliced Design project with `forge init` |
| 🎯 **Generate Entities** | Create widgets, features, and pages with `forge add` or interactive `forge forge` |
| 🎨 **CSS Preprocessor Support** | Choose between LESS, SASS, or SCSS for styling, stored in `.fsdrc` |
| 📝 **Strict PascalCase Validation** | Ensure entity names follow PascalCase convention (e.g., `HomePage`) |
| ⚡ **TypeScript & React Ready** | Generates TypeScript-based React components with tests |
| 🧩 **Modular Architecture** | CLI is built with a modular structure for easy maintenance and extension |

---

## 📦 Installation

### Global Installation (Recommended)
```bash
npm install -g fsd-forge
```

### Local Installation
```bash
npm install fsd-forge
```

> 💡 **Note:** For local installations, use `npx forge` to run commands.

---

## 🛠️ Usage

FSD Forge provides **three main commands** to streamline your workflow:

---

## ⚙️ Commands

### 🏗️ `forge init`

> **Initialize a new FSD project structure**

```bash
forge init
```

**What it does:**
- Creates FSD project structure with `tsconfig.json`, `.fsdrc`, and essential files
- Prompts for CSS preprocessor selection (LESS, SASS, SCSS)
- Sets up the foundation for your Feature-Sliced Design project

---

### 🎯 `forge add <type> <name> [-p, --preprocessor <preprocessor>]`

> **Generate a new entity with specified name and type**

```bash
forge add page HomePage
forge add widget UserCard -p scss
forge add feature AuthForm
```

**Parameters:**
- `<type>`: Entity type (`widget`, `feature`, `page`)
- `<name>`: Entity name in **PascalCase** (e.g., `HomePage`)
- `-p, --preprocessor`: Override default preprocessor

**Features:**
- Uses preprocessor from `.fsdrc` unless overridden
- Validates PascalCase naming convention
- Generates complete entity structure with TypeScript and tests

---

### 🎨 `forge forge`

> **Interactive mode for creating entities**

```bash
forge forge
```

**What it provides:**
- Interactive prompts for entity type selection
- Name validation with helpful suggestions
- Preprocessor selection (if `.fsdrc` is not present)

---

### ❓ `forge help`

> **Display help information**

```bash
forge help
```

---

## 📝 Examples

### 🏗️ Initialize a New Project

```bash
forge init
```

**Interactive prompts:**
```
? Select a CSS preprocessor: SCSS
✅ .fsdrc successfully created with preprocessor scss
✅ tsconfig.json successfully created!
✅ FSD structure successfully created!
```

### 🎯 Add a Page Entity

```bash
forge add page HomePage
```

**Output:**
```
✅ page "HomePage" successfully created in src/pages/HomePage with preprocessor scss
```

**Generated Structure:**
```
src/pages/HomePage/
├── ui/
│   ├── HomePage.tsx
│   ├── HomePage.scss
│   └── HomePage.test.tsx
├── index.ts
src/entities/HomePage/
├── api.ts
└── types.ts
```

### 🎨 Interactive Mode

```bash
forge forge
```

**Interactive flow:**
```
? Select entity type: Page
? Enter entity name (in PascalCase, e.g., HomePage): HomePage
✅ page "HomePage" successfully created in src/pages/HomePage with preprocessor scss
```

---

## 🗂️ Project Structure

After running `forge init`, the following clean structure is created:

```
src/
├── 📄 index.tsx                    # Entry point for React
├── 📄 App.tsx                      # Main App component
├── 📁 shared/
│   ├── 📁 types/
│   │   └── 📄 styleModules.d.ts    # Type declarations for CSS modules
│   ├── 📁 lib/                     # Shared utilities and libraries
│   ├── 📁 ui/                      # Shared UI components
│   └── 📁 config/                  # Application configuration
├── 📁 pages/                       # Application pages
├── 📁 features/                    # Business features
├── 📁 widgets/                     # Composite UI blocks
├── 📁 entities/                    # Business entities
└── 📁 app/                         # App-level configuration
📄 tsconfig.json                    # TypeScript configuration
📄 .fsdrc                           # FSD Forge configuration
```

### 📄 Example Entity Structure

**For a page named `HomePage` with `scss`:**

#### `src/pages/HomePage/ui/HomePage.tsx`
```typescript
import { FC } from 'react';
import styles from './HomePage.module.scss';

interface HomePageProps {}

export const HomePage: FC<HomePageProps> = () => {
  return (
    <div className={styles.homepage}>
      HomePage Page
    </div>
  );
};
```

#### `src/pages/HomePage/ui/HomePage.scss`
```scss
.homepage {
  /* Add your scss styles here */
}
```

---

## ⚙️ Configuration

FSD Forge uses a **`.fsdrc`** file to store CSS preprocessor preferences:

```json
{
  "preprocessor": "scss"
}
```

### 🎛️ Configuration Options

| Option | Values | Description |
|--------|--------|-------------|
| `preprocessor` | `less`, `sass`, `scss` | Default CSS preprocessor for new entities |

### 🔧 Override Configuration

You can override the default preprocessor for specific entities:

```bash
forge add widget UserCard -p less  # Uses LESS instead of default
```

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### 🚀 Getting Started

1. **Fork** the repository
2. **Clone** your fork: `git clone https://github.com/Meybiz/fsd-forge.git`
3. **Create** a feature branch: `git checkout -b feature/YourAmazingFeature`
4. **Make** your changes and **commit**: `git commit -m 'Add YourAmazingFeature'`
5. **Push** to the branch: `git push origin feature/YourAmazingFeature`
6. **Open** a Pull Request

### 📋 Guidelines

- Follow the existing **modular structure**
- Include **tests** where applicable
- Update **documentation** for new features
- Use **conventional commits** for clear history

### 🏗️ Development Setup

```bash
# Clone the repository
git clone https://github.com/Meybiz/fsd-forge.git

# Install dependencies
npm install

# Run in development mode
npm run dev

# Run tests
npm test
```

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Made with ❤️ for the Feature-Sliced Design community**

[Report Bug](https://github.com/Meybiz/fsd-forge/issues) · [Request Feature](https://github.com/Meybiz/fsd-forge/issues) · [Documentation](https://feature-sliced.design/)

</div>