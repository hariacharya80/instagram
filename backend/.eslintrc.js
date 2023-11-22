module.exports = {
  env: {
    node: true,
    browser: true,
    commonjs: true,
    es2021: true,
  },

  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    "@typescript-eslint/no-var-requires": "off",
  },
};
