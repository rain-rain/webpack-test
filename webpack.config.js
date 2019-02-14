const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const Webpack = require('webpack')

module.exports = {
  mode: 'development',
  // mode: 'production',
  // 这里是打包的入口文件(相对路径)
  entry: './src/index.js',
  output: {
    // 打包结果存放的位置(必须用绝对路劲)
    path: path.resolve(__dirname, 'dist'),
    // path: path.resolve('/Users/rainzhao/collect/webpack/demo/1', 'dist'),
    // 打包结果文件名称
    filename: 'index.[hash:8].js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:8].css",
      chunkFilename: "[id].css"
    }),
    new Webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './index.html', // 模板文件          
      filename: 'index.html'
    })
  ]

}
