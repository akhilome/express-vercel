const { Router } = require('express');
const controller = require('../../controllers/echo.controller');

const r = Router();

r.route('/:name').get(controller).post(controller);

module.exports = r;
