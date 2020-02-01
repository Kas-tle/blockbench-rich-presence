const path = require('path')

const BUILD_DIR = path.resolve(__dirname, 'dist/')

const config = {
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
