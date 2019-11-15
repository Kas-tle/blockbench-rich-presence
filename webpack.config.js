const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
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
