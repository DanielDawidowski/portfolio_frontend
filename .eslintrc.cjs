module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh", "jest", "prettier"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": [
      "error",
      { endOfLine: "auto" },
      { usePrettierrc: true },
    ],
    semi: [2, "always"],
    "space-before-function-paren": [
      0,
      { anonymous: "always", named: "always" },
    ],
    camelcase: 0,
    "no-return-assign": 0,
    "react/react-in-jsx-scope": 0,
    "react/display-name": 0,
  },
};
