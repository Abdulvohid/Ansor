const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
});

const path = require("path");

// module.exports = {
//   css: {
//     loaderOptions: {
//       sass: {
//         includePaths: [
//           path.resolve(__dirname, "./node_modules/compass-mixins/lib"),
//         ],
//       },
//     },
//   },
// };

// module.exports = {
//   projects: [
//     {
//       jsconfig: "./jsconfig.json",
//       package: "./[folder-name]/package.json",
//     },
//   ],
// };
