module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "plugin:prettier/recommended"],
  globals: {
    $: "readonly",
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "linebreak-style": "off",
    "func-names": "off",
    "no-param-reassign": [2, { props: false }],
    "react/jsx-one-expression-per-line": "off",
    "react/jsx-props-no-spreading": "off",
  },
};
