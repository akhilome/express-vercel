const { Router } = require('express');
const demo = require('./demo.route');
const v1 = require('./v1');

const r = Router();

r.use('/demo', demo);
r.use('/v1', v1);

r.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'express vercel boiler plate',
    data: null
  });
});

module.exports = r;
