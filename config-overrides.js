const { override, addLessLoader, fixBabelImports } = require("customize-cra");
const theme = require("./lessVar");

module.exports = override(
    addLessLoader({
        javascriptEnabled: true,
    }),
    fixBabelImports("import",{
        libraryName:'antd',
        libraryDirectory: 'es',
        style:true,
        modifyVars:theme
    })
);
