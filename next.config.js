const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  let nextConfig;
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    nextConfig = {
      reactStrictMode: true,
      env: {
        PREFIX: ''
      }
    };
  } else {
    const url = "/odin-recipes";
    nextConfig = {
      reactStrictMode: true,
      basePath: `${url}`,
      assetPrefix: `${url}/`,
      env: {
        PREFIX: `${url}`
      }
    };
  }

  // const nextConfig = {
  //   reactStrictMode: true,
  //   basePath: "/odin-recipes",
  //   assetPrefix: "/odin-recipes/",
  //   env: {
  //     prefix: phase === PHASE_DEVELOPMENT_SERVER ? '' : '/odin-recipes'
  //   }
  // };

  console.log(phase, nextConfig);
  return nextConfig;
}