const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const adminDate = require('./admin');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log(adminDate.product)
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});

module.exports = router;
