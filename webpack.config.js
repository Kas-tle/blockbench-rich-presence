const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

const BUILD_DIR = path.resolve(__dirname, 'dist/')

const config = {
  optimization: {
    minimizer: [
      new UglifyJSPlugin({
        uglifyOptions: {
          output: {
            comments: false,
            beautify: true,
          },
        },
      }),
    ],
  },
  entry: {
    plugin: './main.js'
  },
  output: {
    path: BUILD_DIR,
    publicPath: '/',
    filename: 'discord-rpc.js'
  },
  target: 'electron-renderer',
  mode: 'production',
  externals: [
    'electron'
  ]
}

module.exports = config;
