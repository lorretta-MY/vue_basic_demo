const httpUrl = "www.baidu.com";
const path = require("path");

module.exports = {
  publicPath: "./",
  outputDir: "./dist",
  lintOnSave: false,
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: "192.168.102.74",
    port: 8080,
    https: false,
    hotOnly: false,
    //设置代理
    proxy: {
      "/api": {
        target: httpUrl,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "/",
        },
      },
    },
    // 第三方插件配置
    pluginOptions: {},
  },
  // webpack相关配置
  chainWebpack: (config) => {
    config.resolve.alias
      .set("vue$", "vue/dist/vue.esm.js")
      .set("@", path.resolve(__dirname, "./src"));
  },
  // css相关配置
  css: {
    // 是否分离css（插件ExtractTextPlugin）
    extract: true,
    // 是否开启 CSS source maps
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 是否启用 CSS modules for all css / pre-processor files.
    modules: false,
  },
};
