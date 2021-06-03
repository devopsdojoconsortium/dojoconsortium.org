module.exports = {
  preset: 'jest-preset-gatsby',
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/node_modules/**',
    '!**/gatsby-*.js',
    '!**/_deploy.js',
    '!**/dist/**',
    '!**/.history/**',
    '!**/.cache/**',
    '!**/coverage/**',
    '!**/__test__/**',
    '!**/__mocks__/**',
  ],
}
