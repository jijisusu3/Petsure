const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://j7b202.p.ssafy.io/',
      changeOrigin: true,
    }),
  );
};
