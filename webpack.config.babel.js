import merge from 'webpack-merge';

import { commonConfig, devConfig, prodConfig } from './webpack-configs';

const webpackConfig = (env) => {
  return getEnvironmentConfig(env.prod);
};

const getEnvironmentConfig = (isProduction = false) => {
  return isProduction
    ? merge(commonConfig, prodConfig)
    : merge(commonConfig, devConfig);
};

export default webpackConfig;
