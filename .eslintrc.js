// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: [
    "react"
  ],
  rules: {
    "react/jsx-uses-react": "error", // Prevent React to be marked as unused
    "react/jsx-uses-vars": "error", // Prevent variables used in JSX to be marked as unused
    indent: ["error", 2], // Enforces consistent indentation with only 2 spaces
    semi: ["error", "always"], // requires semicolons at the end of statements
    "space-before-function-paren": ["error", "never"], // disallows any space followed by the ( of arguments. Disallowed example `function func (x)`
    quotes: ["error", "double", {allowTemplateLiterals: true}], // Allow only single quotes
    "object-curly-spacing": 2,
    "comma-spacing": [2, {before: false, after: true}]
  },
  settings: {
    react: {
      version: "detect",
      "pragma": "React",  // Pragma to use, default to "React"
    }
  }
};
