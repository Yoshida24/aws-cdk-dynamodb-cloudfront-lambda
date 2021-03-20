/* globals module*/
import Webpack from 'webpack';
import { execSync } from 'child_process';
import pkg from './package.json';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const cmd = 'git log -n 1 --format=%h,%cd';
const result = execSync(cmd).toString().split(',');
const commitId = result[0];

module.exports = {
  entry: {
    sampleApp: './src/app/ts/index.ts',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ts|js)$/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      name: 'index.html',
      template: 'src/mock/html/index.html',
      minify: false
    }),
    new Webpack.BannerPlugin({
      banner: [
        `[name] - v${pkg.version} - ${commitId}`,
        'Copyright (c) 2020 Sprocket, Inc.',
      ].join('\n'),
    }),
  ],
  devServer: {
    contentBase: './dist',
  },
  resolve: {
    extensions: ['.ts', '.json', '.js', '.css'],
  },
};
