var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');
var marked = require('marked');

router.get('/', function(req, res, next) {
  res.render('index', {title: 'index'});
});

router.get('/posts', function(req, res, next) {
  res.render('posts', {title: 'posts'});
});

router.get('/posts/new', function(req, res, next) {
  res.render('new');
});

router.get('/posts/show', function(req, res, next) {
  var id = req.query.id;
  PostModel.findOne({_id:id}, function(err, post) {
    post.content = marked(post.content);
    res.render('show', {post});
  });
});

router.get('/posts/edit', function (req, res, next) {
  var id = req.query.id;

  res.render('edit', { id });
});

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/signin', function (req, res, next) {
  res.render('signin');
});

module.exports = router;