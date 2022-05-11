const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api/v1/quotes',
    createProxyMiddleware({
      target: 'http://localhost:8081',
      changeOrigin: true,
    }),
  );
};
