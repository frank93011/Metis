module.exports = {
  coverageDirectory: "coverage",
  preset: 'ts-jest',
  testEnvironment: 'node',
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
  setupFiles: ["<rootDir>/.jest/setEnvVars.ts"]
};