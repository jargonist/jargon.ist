// @flow

module.exports = {
  transform: {
    '.(js|jsx)': 'babel-jest',
  },
  testEnvironment: 'jest-environment-jsdom-global',
  testRegex: '(\\.(test|spec))\\.(jsx|js)$',
  testPathIgnorePatterns: ['/node_modules/', '/.cache/'],
  modulePaths: ['src'],
  moduleNameMapper: {
    '\\.(scss|svg|png|jpg)$': '<rootDir>/src/styleMock.js',
  },
  moduleFileExtensions: ['jsx', 'js'],
  coverageReporters: ['lcov', 'text', 'html'],
  setupTestFrameworkScriptFile: './src/setupTests.js',
  snapshotSerializers: ['enzyme-to-json/serializer'],
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!src/components/**/index.{js,jsx}',
    '!src/types/**/*.js',
    '!src/html.jsx',
    '!src/styleMock.js',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
};
