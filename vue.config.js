module.exports = {
  lintOnSave: false, // 关闭 eslint 检测
  productionSourceMap: false, // 生产环境不生成sourcemap文件
  publicPath: process.env.NODE_ENV === 'development' ? '/' : './',  
  devServer: {
    proxy: {
      "/sw/*": {
        target: "http://3714ty0370.qicp.vip/"
      },
      "/sys/*": {
        target: "http://3714ty0370.qicp.vip/"
      },
      "/resource/*": {
        target: "http://3714ty0370.qicp.vip/"
      },
    }
  },
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'development' ? 'source-map' : undefined,
  }
}
