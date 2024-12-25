import type { Config } from 'jest';
const path = require('path');
const config: Config = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  
  // Основные настройки
  clearMocks: true,
  
  // Настройки трансформации
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform'
  },

  // Маппинг модулей
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/src/mocks/fileMock.js',
    '^@/(.*)$': path.resolve(__dirname, './src/$1'),
  },

  // Директории и расширения
  moduleDirectories: [
    'node_modules', 
    'src'
  ],
  moduleFileExtensions: [
    'js', 
    'mjs', 
    'cjs', 
    'jsx', 
    'ts', 
    'tsx', 
    'json', 
    'node'
  ],

  // Паттерны для поиска тестов
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[tj]s?(x)'
  ],

  // Игнорирование некоторых путей при трансформации
  transformIgnorePatterns: [
    '/node_modules/(?!your-esm-package|another-esm-package)'
  ],

  // Дополнительные настройки
  setupFilesAfterEnv: ['<rootDir>/jest/setupTests.ts']
};

export default config;