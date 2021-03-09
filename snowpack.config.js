// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
      src: { url: "/", resolve: true, static: false }
    },
    plugins: ['@snowpack/plugin-sass', { compilerOptions: { loadPath: 'node_modules' } }],
    packageOptions: {
      source: "remote",
      types: true,
      
    },
    devOptions: {},
    buildOptions: {},
    optimize: {
      bundle: false,
      minify: false,
      target: 'es2020'
    }
  };
  