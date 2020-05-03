const resolve = dir => require('path').join(__dirname, dir);
module.exports = {
  publicPath:'/blog/',//设置基URL，testurl是部署时项目的文件夹目录
  outputDir:'dist/blog',//输出目录，默认dist
  chainWebpack: config => {
    config.resolve.alias
      //@,是cli 3中默认指向了src，但是只能用于导入模板，不能用于定位资源文件（图片、css、js等）
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },
  // assetsDir:'',//自定义所有css、img、js等资源输出的目录，相对于outputDir，就是默认在输出目录的根目录下。
  // indexPath:''//自定义index.html输出的位置，相对于outputDir。
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:80',//这个指向服务端api
        ws: true,
        changeOrigin: true
      }
    }
  }
}