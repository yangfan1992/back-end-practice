var express = require('express');
var router = express.Router();

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/posts', function(req, res, next) {
  res.json({postList: ['1','2','3']});
});

module.exports = router;