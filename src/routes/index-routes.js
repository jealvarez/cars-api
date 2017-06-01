'use strict';

const express = require('express');
const router = express.Router();

router.get('/', function(request, response, next) {
  response.render('index', { timestamp: new Date() });
});

module.exports = router;