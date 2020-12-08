const { createProxyMiddleware } = require("http-proxy-middleware");

const url =
  process.env.PROJECT_ENV === "prepare"
    ? "https://pre.cms.clife.cn"
    : "https://dp.clife.net";

module.exports = function (app) {
  app.use(
    createProxyMiddleware(["/v1/**", "/v4/**"], {
      target: url,
      changeOrigin: true,
      secure: false,
    })
  );
};
