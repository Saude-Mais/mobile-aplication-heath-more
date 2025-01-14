import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactNative from "eslint-plugin-react-native";
import prettier from "eslint-plugin-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{cjs,ts,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: "./tsconfig.json",
      },
    },
  },
  pluginJs.configs.recommended, // ESLint JS rules
  ...tseslint.configs.recommended, // TypeScript rules
  {
    plugins: {
      react: pluginReact, // Defina o plugin react corretamente
      'react-native': pluginReactNative, // Defina o plugin react-native corretamente
    },
    settings: {
      react: {
        version: "detect",
        runtime: "automatic",
      },
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/jsx-uses-react": "off",
      "react/jsx-uses-vars": "warn",
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/explicit-function-return-type": "error", // Requer tipos explícitos em funções
      "react/jsx-props-no-spreading": "warn", // Evita espalhamento excessivo de props
      "react-native/no-inline-styles": "warn", // Evita estilos inline em componentes RN
      "react-native/no-unused-styles": "error", // Evita estilos declarados que não são usados
      "prettier/prettier": "warn", // Integração com Prettier para consistência de estilo
    },
  },
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      "prettier/prettier": "warn", // Configuração Prettier
    },
  },
];
