const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ESLintPlugin = require('eslint-webpack-plugin')
const Dotenv = require('dotenv-webpack')

process.env.NODE_CONFIG_ENV = process.env['NODE_CONFIG_ENV'] || 'development'

module.exports = {
  mode: process.env.NODE_CONFIG_ENV,
  entry: path.resolve(__dirname, 'src/bootstrap.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app-[hash].js',
  },
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules')],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: [/\.ts$/, /\.tsx$/],
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
              plugins: ['@babel/plugin-transform-runtime'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/index.html'),
    }),
    new ESLintPlugin({
      extensions: ['ts', 'tsx', 'js'],
    }),
    new Dotenv(),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
}
