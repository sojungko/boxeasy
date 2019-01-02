const webpack = require('webpack');
const dotenv = require('dotenv');

module.exports = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
    // create a nice object from the env variable
    const env = dotenv.config().parsed;
    const envKeys = Object.keys(env).reduce((prev, next) => {
      prev[`process.env.${next}`] = JSON.stringify(env[next]);
      return prev;
    }, {});

    config.plugins.push(
      new webpack.DefinePlugin(envKeys),
    );
    return config;
  },
};
