const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
  entry: './index.js',
  output: {
    filename: 'main.js'
  },
  plugins : [
new BundleAnalyzerPlugin()
  ]
}