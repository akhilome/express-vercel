const { Router } = require('express');

const r = Router();

r.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'demo path live 🚀',
    data: null
  });
});

module.exports = r;
