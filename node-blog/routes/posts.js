var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
  res.render('posts', { title: 'post page.', postList: ['文章1', '文章2', '文章3']});
});

router.get('/list', function(req, res, next){
  res.json({postList: ['文章1','2','3']})
});

module.exports = router;

