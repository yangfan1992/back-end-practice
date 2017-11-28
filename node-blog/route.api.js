var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/posts', function(req, res, next) {
  PostModel.find({}, {}, function(err, posts) {
    if(err) {
      res.json({success: false});
    } else {
      res.json({success: true, postList: posts});
    }
  });
});

router.post('/posts', function(req, res, next) {
  var title = req.body.title;
  var content = req.body.content;

  var post = new PostModel();
  post.title = title;
  post.content = content;
  post.save(function(err, doc) {
    if (err) {
      res.json({success: false});
    } else {
      res.json({success: true});  
    }
  });
});

module.exports = router;