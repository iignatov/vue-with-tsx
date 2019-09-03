const path = require("path");

module.exports = {
  chainWebpack: config => {
    config.module.rule("tsx").test(/\.tsx$/)
      .use("babel-loader")
      .loader("babel-loader")
      .options({
        presets: [
          ["@vue/babel-preset-jsx", {
            functional: true,
            injectH: true,
            vModel: true,
            vOn: false,
          }]
        ]
      })
      .before("ts-loader");

    // NOTE: Keep in sync with the paths in `tsconfig.json`.
    config.resolve.alias.set("@", path.resolve("./src"));
  },
  devServer: {
    // http://expressjs.com/en/4x/api.html#express.static
    staticOptions: {
      fallthrough: false,
      redirect: false,
    },
  },
};
