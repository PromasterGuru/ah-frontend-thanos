module.exports = {
  parser: "babel-eslint",
  extends: [
    "airbnb"
  ],
  plugins: ["react", "import"],
  env: {
    es6: true,
    browser: true,
    node: true,
    jest: true
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    jsx: true,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    "react/jsx-indent": ["error", 2],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    curly: [2, "multi-line"],
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }]
  },
  globals: {
    page: true,
    browser: true,
    context: true,
    jestPuppeteer: true,
  }
};
