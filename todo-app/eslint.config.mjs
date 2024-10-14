import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "commonjs" } },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: ["node_modules/**", "models/**", "migrations/**", "__tests__/**"], // Example of files to ignore
  },
  pluginJs.configs.recommended,
];
