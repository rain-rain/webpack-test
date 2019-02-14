const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // mode: 'development',
  mode: 'production',
  // 这里是打包的入口文件(相对路径)
  entry: './src/index.js',
  output: {
    // 打包结果存放的位置(必须用绝对路劲)
    path: path.resolve(__dirname, 'dist'),
    // path: path.resolve('/Users/rainzhao/collect/webpack/demo/1', 'dist'),
    // 打包结果文件名称
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [{ test: /\.css$/, use: 'css-loader' }]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // 模板文件          
      filename: 'index.html'
    })
  ]

};
