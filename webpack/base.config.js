const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');

function getBaseConfiguration(config) {
  return {
    entry: config.entry,
    devtool: 'source-map',
    output: config.output,
    module: {
      rules: [
        {
          test: /(\.jsx|\.js)$/,
          use: [
            'babel-loader',
          ],
          exclude: /(node_modules|bower_components)/,
        },
        {
          test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            'url-loader?limit=100&mimetype=application/font-woff&name=[name].[ext]',
          ],
        },
        {
          test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            'url-loader?limit=100&mimetype=application/octet-stream&name=[name].[ext]',
          ],
        },
        {
          test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
          use: [
            'file-loader?name=[name].[ext]',
          ],
        },
        {
          test: /\.svg$/,
          use: ['babel-loader', 'react-svg-loader'],
        },
      ],
    },
    resolve: {
      modules: [
        path.resolve('./src'),
        'node_modules',
      ],
      extensions: ['.js', '.jsx'],
    },
    plugins: [
      new CleanWebpackPlugin([config.buildPath], {
        root: config.root,
        verbose: false,
        dry: false,
      }),
    ],
  };
}

module.exports = getBaseConfiguration;
