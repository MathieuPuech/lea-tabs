const path = require('path');
const providenceExtendConfig = require('./providence-extend-docs-data.json');

const extendDocsConfig = {
  rootPath: path.resolve('.'),
  changes: providenceExtendConfig,
};

module.exports = {
  overrides: [
    {
      test: ['./node_modules/@lion/tabs/README.md', './node_modules/@lion/tabs/docs/*.md'],
      plugins: [['babel-plugin-extend-docs', extendDocsConfig]],
    },
  ],
};