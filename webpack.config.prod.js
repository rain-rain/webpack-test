const path = require('path')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin=require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const Webpack = require('webpack')


module.exports = {
  // mode: 'development',
  // mode: 'production',
  // 这里是打包的入口文件(相对路径)
  entry: './src/index.js',
  output: {
    // 打包结果存放的位置(必须用绝对路劲)
    path: path.resolve(__dirname, 'prod'),
    publicPath: 'http://localhost:8000/',
    // path: path.resolve('/Users/rainzhao/collect/webpack/demo/1', 'dist'),
    // 打包结果文件名称
    filename: 'index.[hash:8].js',
    chunkFilename:'[name].js'
  },
  module: {
    rules: [
      {
        test: /src\/\.js$/,
        use: 'babel-loader',
      },
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
          loader: 'url-loader',
          options: {
            limit: 1,
            name: '[name].[hash:8].[ext]',
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
            // minimize: true
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '-',
      name: true,
      cacheGroups: {
        react: {
          test: /react/,
          name: "react",
          priority: 1,
          minChunks: 1,
        }
      }
    },
    runtimeChunk: {
      name: "manifest"
    }
  },
  plugins: [
    new CleanWebpackPlugin('prod/*.*', {
      root: __dirname,
      verbose: true,
      dry: false
    }),
    new CopyWebpackPlugin([{
      from: path.join(__dirname, './favicon.ico'),
      to: path.join(__dirname, 'prod')
    }]),
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
