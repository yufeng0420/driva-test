module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,ts}'],
  coverageReporters: ['json-summary', 'text', 'lcov'],
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testRegex: '/.*\\.test\\.(ts|js)$',
  coveragePathIgnorePatterns: [
    '/dist/*',
    '/src/index.ts',
    '/__snapshots__/.*',
    '/*.mock.js',
    '/*.mock.ts',
    '/*.json',
    '/migrations/*',
    '/models/*',
    '/constants/*'
  ],
  coverageThreshold: {
    global: {
      branches: 0,
      functions: 0,
      lines: 0,
      statements: 0
    }
  },
  moduleFileExtensions: ['ts', 'js', 'json', 'node']
};
