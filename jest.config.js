/* eslint-env node */
module.exports = {
  // Indique à Jest de stopper les tests après le premier échec
  bail: true,

  // Indique à Jest qu'il doit collecter la couverture de test
  collectCoverage: true,

  // Indique à Jest où chercher les fichiers de test
  testMatch: [
    "**/__tests__/**/*.js?(x)",
    "**/?(*.)+(spec|test).js?(x)"
  ],

  // Indique à Jest d'utiliser le transformateur Babel pour les fichiers .js
  transform: {
    "^.+\\.js$": "babel-jest"
  },

  // Indique à Jest de ne pas transformer les fichiers dans node_modules
  transformIgnorePatterns: [
    "/node_modules/"
  ],

  // Indique à Jest d'afficher un résumé de la couverture de test à la fin des tests
  coverageReporters: ["text-summary", "lcov"]
};
