const express = require('express');
const response = require('../../../network/response');

const router = express.Router();

router.get('/', function (req, res) {
  response.success(req, res, 'Todo correcto', 200);
});

router.get('/error/', function (req, res) {
  response.error(req, res, 'Emulate an error', 500);
});

module.exports = router;
