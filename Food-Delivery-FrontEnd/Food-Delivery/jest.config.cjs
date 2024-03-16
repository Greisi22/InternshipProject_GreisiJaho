// jest.config.cjs

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testEnvironmentOptions: {
      'jsdom': {
        'resizeObserverPolyfill': true,
      },
    },
  transform: {
      '^.+\\.(js|jsx|ts|tsx)$': 'ts-jest',
  },
  moduleNameMapper: {
      '^src/(.*)$': '<rootDir>/src/$1',
      '\\.(gif|ttf|eot|svg|png|jpg|jpeg)$': '<rootDir>/src/__ mocks __/fileMock.js',
      '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
}