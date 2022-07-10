const express = require('express');
const response = require('../../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', function (req, res) {
  const lstUsers = controller.list();
  response.success(req, res, lstUsers, 200);
});

router.get('/error/', function (req, res) {
  response.error(req, res, 'Emulate an error', 500);
});

module.exports = router;
