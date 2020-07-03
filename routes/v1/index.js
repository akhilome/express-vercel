const { Router } = require('express');
const echo = require('./echo.route');

const r = Router();

r.use('/echo', echo);

r.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'v1 path live 🔥',
    data: null
  });
});

module.exports = r;
