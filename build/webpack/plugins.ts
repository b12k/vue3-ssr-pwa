import VueSsrBundlePlugin from 'vue-server-renderer/server-plugin';
import EslintWebpackPlugin from 'eslint-webpack-plugin';
import WebpackBarPlugin from 'webpackbar';
import { VueLoaderPlugin } from 'vue-loader';
import { EnvironmentPlugin } from 'webpack';
import VueClientManifestPlugin from 'vue-server-renderer/client-plugin';

export const vueEnvPlugin = (VUE_ENV: 'server' | 'client') => new EnvironmentPlugin({ VUE_ENV });
export const vueLoaderPlugin = () => new VueLoaderPlugin();
export const vueSsrBundlePlugin = () => new VueSsrBundlePlugin({
  filename: '../ssr/ssrBundle.json',
});
export const eslintWebpackPlugin = () => new EslintWebpackPlugin();
export const vueClientManifestPlugin = () => new VueClientManifestPlugin({
  filename: '../ssr/clientManifest.json',
});
export const webpackBarPlugin = () => new WebpackBarPlugin({});
