module.exports = {
  "extends": ["next/core-web-vitals", "prettier"],
  "root": true,
  "rules": {
    "no-var": "error",
    "no-unused-vars": "error",
    "no-duplicate-imports": "error",
    "prefer-const": "warn",
    "max-len": ["error", 120, { "ignoreUrls": true}],
    "semi": ["error", "always"],
    "comma-dangle": ["error", {
      "arrays": "never",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "never",
    }],
    // Functions
    // "max-lines-per-function": ["error", { "max": 30 }],
    // "arrow-parens": ["error", "always"]
    // "implicit-arrow-linebreak": ["error", "beside"],
    // "brace-style": ["warn", "1tbs" ] ,
    "arrow-body-style": ["error", "as-needed"],
    "react/jsx-sort-props": "off",
    "react/function-component-definition": [
      2, {
        "namedComponents": "arrow-function",
        "unnammedComponents": "arrow-function",
      }
    ],
  },
};
