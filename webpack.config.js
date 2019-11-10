const path = require('path')

module.exports = {
  mode: 'production',
  entry: './test.js',
  target: 'electron-renderer',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  externals: [
    "electron"
  ]
}
