var express = require('express');
var router = express.Router();
var path = require('path');

router
  .get('/', (req, res) => {
    res.sendFile(path.resolve('./public/html/index.html'));
  })
  .get('/lessons', (req, res) => {
    res.sendFile(path.resolve('./public/html/lessons/lessons.html'));
  });

module.exports = router;