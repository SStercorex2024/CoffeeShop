import js from "@eslint/js"
import globals from "globals"
import pluginReact from "eslint-plugin-react"
import { defineConfig } from "eslint/config"
import prettierPlugin from "eslint-plugin-prettier"
import prettierConfig from "eslint-config-prettier"

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
      prettier: prettierPlugin,
    },
    extends: ["js/recommended", prettierConfig],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      "no-console": "warn",
      eqeqeq: "warn",
      curly: "warn",
      "no-else-return": "warn",
    },
    languageOptions: { globals: globals.browser },
  },
  {
    ...pluginReact.configs.flat.recommended,
    rules: {
      ...pluginReact.configs.flat.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      "react/display-name": "off",
    },
  },
])
