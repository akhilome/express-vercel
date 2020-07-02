const express = require('express');
const helmet = require('helmet');

const apiRoutes = require('./api');

const app = express();

app.use(helmet());
app.use('/api', apiRoutes);

app.all('/', (req, res) => {
  res.json({
    success: true,
    message: 'boilerplate demo'
  });
});

app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'route not defined'
  });
});

module.exports = app;
