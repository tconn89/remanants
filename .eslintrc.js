module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    schedulePopApp: 'readonly',
    angular: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    indent: ["error", 4],
    "prefer-arrow-callback": 0,
    "func-names": 0,
    curly: 0,
    "no-param-reassign": 0,
    "max-len": 0,
    "object-shorthand": 0,
    "object-curly-spacing": 0,
  },
};
