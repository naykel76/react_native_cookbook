const createExpoWebpackConfigAsync = require('@expo/webpack-config');

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  // Customize the config before returning it.
  
  // Add a resolve fallback for 'crypto' to a false value
  config.resolve.fallback = {
    ...config.resolve.fallback,
    crypto: false,
  };

  return config;
};