var express = require('express');
var router = express.Router();
var PostModel = require('./models/post');

router.get('/users', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/posts', function(req, res, next) {
  PostModel.find({}, {}, function(err, posts) {
    if(err) {
      next(err);
      //errorHandle(err, next);
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
      next(err);
      //errorHandle(err, next);
    } else {
      res.json({success: true, post: doc});  
    }
  });
});

router.get('/posts/:id', function (req, res, next) {
  var id = req.params.id;

  PostModel.findOne({_id: id}, function(err, post) {
    if (err) {
      next(err);
      //errorHandle(err, next);
    } else {
      res.json({ success: true, post });
    }
  });
});

router.patch('/posts', function(req, res, next) {
  var id = req.body.id;
  var title = req.body.title;
  var content = req.body.content;

  PostModel.findOneAndUpdate({ _id: id }, { title, content }, function(err) {
    if (err) {
      next(err);
      //errorHandle(err, next);
    } else {
      res.json({});
    }
  });
});

module.exports = router;