const { Router } = require('express');
const { SuccessResponseObject } = require('../common/http');

const r = Router();

r.get('/', (req, res) => res.json(new SuccessResponseObject('demo path live 🚀')));

module.exports = r;
