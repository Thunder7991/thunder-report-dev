const path = require('path');
// 拼接路径
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  productionSourceMap: false,
  lintOnSave: false,
  css: {
    extract: false,
  }, // css文件不分离
  publicPath: '/', // 根目录
  devServer: {
    port: 5001,
    host: '0.0.0.0',
    //   proxy: {
    //     '': {
    //       target: 'http://gonglulive.kechuangfu.cn:88/',
    //       changeOrigin: true,
    //       secure: true,
    //       headers: {
    //         Referer: 'http://gonglulive.kechuangfu.cn:88/'
    //       }
    //     },
    //   }
  },
  configureWebpack: {
    // devtool: 'source-map',
    resolve: {
      alias: {
        '@': resolve('src'),
        main: resolve('src'),
      },
    },
  },
};
