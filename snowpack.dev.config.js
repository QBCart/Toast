// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      src: { url: "/", resolve: true, static: false },
      dev: { url: "/", resolve: true, static: false },
    },
    plugins: [],
    packageOptions: {
      source: "remote",
      types: true,
      
    },
    devOptions: {},
    buildOptions: {}
  };
  