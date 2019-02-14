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
    path: path.resolve(__dirname, 'img'),
    // path: path.resolve('/Users/rainzhao/collect/webpack/demo/1', 'dist'),
    // 打包结果文件名称
    filename: 'index.[hash:8].js',
  },
  module: {
    rules: [
      {
        test:/\.css/,
        use:[MiniCssExtractPlugin.loader,"css-loader",{
          loader: "postcss-loader",
          options: {
            plugins: () => [require('autoprefixer')]
          }
        }]
      },
      {
        test:/\.less$/,
        use:[MiniCssExtractPlugin.loader,"css-loader",{
          loader: "postcss-loader",
          options: {
            plugins: () => [require('autoprefixer')]
          }
        },"less-loader"]
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            publicPath: "./images/",
            outputPath: "images/"
          }
        }]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
          options: {
            attrs: ['img:src', 'img:data-src', 'audio:src'],
            minimize: true
          }
        }
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
