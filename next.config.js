const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const withImages = require("next-images");

module.exports = withPWA(
  withImages({
    esModule: true,
    pwa: {
      dest: "public",
      runtimeCaching
    },
    future: {
      webpack5: true
    }
  })
);

// module.exports = withImages({
//   future: {
//     webpack5: true
//   }
// });
