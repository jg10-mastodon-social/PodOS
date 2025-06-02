// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config({
  languageOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
});
