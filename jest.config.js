module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testPathIgnorePatterns: [
    "/node_modules/",
  ],
  reporters: ["jest-spec-reporter"],
  maxConcurrency:1,
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/tsconfig.json'
    },
  },
};