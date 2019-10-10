/* eslint-disable */
/* config-overrides.js */
const {
  useBabelRc, override, fixBabelImports, addLessLoader,
} = require('customize-cra');
const path = require('path');
module.exports = override(
  useBabelRc(),
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      'hack': `true; @import "${ path.resolve(__dirname, 'src/assets/less/theme.less')}";`,// Override with less file
    },
  }),
);
