import { Configuration } from 'webpack';

import {
  isProdMode,
  resolvePath,
  isProdServer,
} from './helpers';

export const config: Configuration = {
  mode: isProdMode ? 'production' : 'development',
  resolve: {
    extensions: ['.ts', '.vue'],
  },
  output: {
    path: resolvePath('dist/public'),
  },
  devtool: isProdServer ? undefined : 'source-map',
};
