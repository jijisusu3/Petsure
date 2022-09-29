const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'https://j7b202.p.ssafy.io',
      changeOrigin: true,
    }),
  );
};
