const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3000',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/flask',
    createProxyMiddleware({
      target: 'http://localhost:5000',
      changeOrigin: true,
    })
  );
};

// const { createProxyMiddleware } = require('http-proxy-middleware');

// module.exports = function (app) {
//   // Proxy requests to Flask server
//   app.use(
//     '/flask',
//     createProxyMiddleware({
//       target: 'http://localhost:5000',
//       changeOrigin: true,
//     })
//   );

//   // Proxy requests to Rails server
//   app.use(
//     '/rails',
//     createProxyMiddleware({
//       target: 'http://localhost:3000',
//       changeOrigin: true,
//     })
//   );
// };