var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', {title: 'index'});
});

router.get('/posts', function(req, res, next) {
  res.render('posts', {title: 'posts'});
});

module.exports = router;