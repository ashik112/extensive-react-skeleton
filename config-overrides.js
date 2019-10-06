/* config-overrides.js */
const { useBabelRc, override, fixBabelImports } = require('customize-cra');

module.exports = override(
  useBabelRc(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  }),
);
