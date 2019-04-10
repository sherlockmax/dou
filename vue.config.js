module.exports = {
  chainWebpack: (config) => {
    config.module
      .rule('pug')
      .test(/\.pug$/)
      .use('pug-html-loader')
      .loader('pug-html-loader')
      .end()
  },
  configureWebpack: {
    entry: {
      style: ['@/styles/main.scss']
    }
  },
  devServer: {
    proxy: {
      '/gua': {
        target: 'http://localhost:7777', // 微服務 api
        changeOrigin: true,
        pathRewrite: {
          '^/gua': ''
        }
      }
    }
  }
}
