# React + TypeScript + Vite — Starter profesional

> Plantilla base para proyectos modernos con React, TypeScript y Vite. Incluye configuración avanzada de calidad de código, formateo, testing y automatización de flujos de trabajo.

---

## Tabla de contenido

- [Propósito](#propósito)
- [Estructura de carpetas](#estructura-de-carpetas)
- [Scripts principales](#scripts-principales)
- [Configuración de calidad](#configuración-de-calidad)
  - [ESLint](#eslint)
  - [Prettier](#prettier)
  - [Husky y lint-staged](#husky-y-lint-staged)
  - [Vitest](#vitest)
- [Recomendaciones para contribuir](#recomendaciones-para-contribuir)
- [Ejemplo de componente y test](#ejemplo-de-componente-y-test)
- [Recursos útiles](#recursos-útiles)

---

## Propósito

Esta plantilla está diseñada para iniciar proyectos React/TypeScript con las mejores prácticas de calidad, automatización y DX (Developer Experience). Todo listo para escalar y mantener código profesional desde el primer commit.

---

## Estructura de carpetas

```text
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── assets/
├── chadcn/
│   └── components/
│       └── ui/
├── __test__/
│   └── main.test.tsx
├── .husky/
│   └── pre-commit
├── .vscode/
│   └── settings.json
├── .prettierrc
├── .prettierignore
├── eslint.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```

---

## Scripts principales

```bash
# Desarrollo
npm run dev

# Build de producción
npm run build

# Linting y formateo
npm run lint
npm run lint:fix
npm run format
npm run format:check

# Testing
npm run test
npm run test:ui
npm run coverage

# Validación completa (lint + format + test)
npm run check
```

---

## Configuración de calidad

### ESLint

- Configuración en `eslint.config.js` usando `defineConfig`.
- Extiende reglas recomendadas para JS, TS y React.
- Plugins: `react-hooks`, `react-refresh`, `import`, `react-x`, `react-dom`.
- Reglas clave: llaves obligatorias (`curly: all`), igualdad estricta (`eqeqeq: always`), prohíbe `console`.
- Ignora carpetas: `dist`, `coverage`, `chadcn`, `node_modules`.

**Ejemplo de configuración:**

```js
// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';
import importPlugin from 'eslint-plugin-import';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'coverage', 'chadcn', 'node_modules']),
  {
    extends: [js.configs.recommended, tseslint.configs.recommended],
    languageOptions: {
      ecmaVersion: 2023,
    },
    rules: {
      curly: ['error', 'all'],
      eqeqeq: ['error', 'always'],
      'no-console': 'error',
    },
  },
]);
```

### Prettier

- Configuración en `.prettierrc` y sincronizada con `.vscode/settings.json`.
- Formato automático al guardar en VS Code.
- Usa el plugin `prettier-plugin-tailwindcss` para ordenar clases de Tailwind.

**Ejemplo de configuración:**

```json
{
  "bracketSameLine": false,
  "endOfLine": "lf",
  "jsxSingleQuote": false,
  "plugins": ["prettier-plugin-tailwindcss"],
  "printWidth": 120,
  "semi": true,
  "singleAttributePerLine": false,
  "singleQuote": true,
  "tabWidth": 2,
  "tailwindFunctions": ["cn", "cva"],
  "tailwindStylesheet": "src/index.css",
  "trailingComma": "es5"
}
```

### Husky y lint-staged

- Hook de pre-commit ejecuta:
  - Linting (ESLint)
  - Formateo (Prettier)
  - Tests relacionados (Vitest)
- Si alguna validación falla, el commit se bloquea.

**Ejemplo de hook `.husky/pre-commit`:**

```sh
echo ""
echo ">>> HUSKY PRE-COMMIT RUNNING (ESLint + Prettier + tests related) <<<"
echo "If your commit fails, run 'npx lint-staged' or 'npm run lint' in the terminal for detailed errors."
echo ""

npx lint-staged

echo "Pre-commit: validations completed."
```

### Vitest

- Framework de testing rápido y moderno.
- Integrado con Testing Library para pruebas de componentes React.

**Ejemplo de test:**

```tsx
import { render, screen } from '@testing-library/react';
import { App } from '../src/App';

test('renderiza saludo', () => {
  render(<App />);
  expect(screen.getByText(/hola/i)).toBeInTheDocument();
});
```

---

## Recomendaciones para contribuir

- Usa VS Code con la extensión Prettier.
- Guarda los archivos para aplicar el formateo automáticamente.
- Si un commit falla, ejecuta `npm run lint` o `npx lint-staged` para ver los errores.
- Mantén la estructura de carpetas y sigue los ejemplos para nuevos componentes y tests.

---

## Ejemplo de componente y test

### Componente React (`src/App.tsx`)

```tsx
import React from 'react';

export function App() {
  return <h1 className="text-2xl font-bold">¡Hola, React + TS + Vite!</h1>;
}
```

### Test básico (`__test__/main.test.tsx`)

```tsx
import { render, screen } from '@testing-library/react';
import { App } from '../src/App';

test('renderiza saludo', () => {
  render(<App />);
  expect(screen.getByText(/hola/i)).toBeInTheDocument();
});
```

---

## Recursos útiles

- [Documentación oficial de React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/)
- [Testing Library](https://testing-library.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

---

¡Usa esta plantilla para iniciar proyectos robustos, escalables y con calidad profesional desde el primer commit!

## React + TypeScript + Vite — Starter Template

> Plantilla profesional para iniciar proyectos modernos con React, TypeScript y Vite. Incluye configuración avanzada de calidad de código, formateo, testing y automatización de flujos de trabajo.

---

### Contenido de esta plantilla

- Descripción del propósito como starter
- Instrucciones de uso y scripts
- Explicación de la configuración de calidad (Prettier, ESLint, Husky, Vitest)
- Recomendaciones para contribuir y mantener el formato
- Breve guía de estructura de carpetas

---

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

---

## 🚀 ¿Qué incluye esta plantilla?

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

```text
├── public/
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── assets/
├── chadcn/
│   └── components/
│       └── ui/
├── __test__/
│   └── main.test.tsx
├── .husky/
│   └── pre-commit
├── .vscode/
│   └── settings.json
├── .prettierrc
├── .prettierignore
├── eslint.config.js
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md
```
