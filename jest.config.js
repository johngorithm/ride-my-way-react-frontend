module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  testMatch: ['<rootDir>/tests/**/?(*.)(spec|test).js?(x)'],
  testEnvironment: 'node',
  testURL: 'http://localhost',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/fileTransform.js',
  },
  transformIgnorePatterns: [
    '[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$',
    '/index.js/',
  ],
  moduleFileExtensions: ['web.js', 'js', 'json', 'web.jsx', 'jsx', 'node'],
  moduleNameMapper: {
    // '^.+\\.(css|less|scss)$': 'identity-obj-proxy',
    // '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    // Images: path.resolve(__dirname, './src/static/images'),
    '^pages(.*)$': '<rootDir>/src/pages$1',
    '^components(.*)$': '<rootDir>/src/components$1',
    '^static(.*)$': '<rootDir>/src/static$1',
    '^store(.*)$': '<rootDir>/src/store$1',
    '^actions(.*)$': '<rootDir>/src/store/actions$1',
    '^constants(.*)$': '<rootDir>/src/store/constants$1',
    '^reducers(.*)$': '<rootDir>/src/store/reducers$1',
  },
  'modulePathIgnorePatterns': ['<rootDir>/src/store'],
  'globals': {
    'window': true
  }
};
