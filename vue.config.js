module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    proxy:{
      '/api':{
        target:'http://mall-pre.springboot.cn',
        changeOrigin:true,
        pathRewrite:{
          '/api':''
        }
      }
    }
  },
  // publicPath:'/app',
  // outputDir:'dist',
  // indexPath:'index2.html',
  // lintOnSave:false,
  productionSourceMap:false,  //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。本地调试建议改成true
  chainWebpack:(config)=>{
    config.plugins.delete('prefetch');
  }
}