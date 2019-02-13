const path = require('path');

module.exports = {
  mode: 'development',
  // mode: 'production',
  // 这里是打包的入口文件(相对路径)
  entry: './index.js',
  output: {
    // 打包结果存放的位置(必须用绝对路劲)
    path: path.resolve(__dirname, 'dist'),
    // path: path.resolve('/Users/rainzhao/collect/webpack/demo/1', 'dist'),
    // 打包结果文件名称
    filename: 'bundle.js',
  },
};
