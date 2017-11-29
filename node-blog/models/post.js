var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var PostSchema  = new Schema({
  title: String,
  content: String,
  authorId: ObjectId
});

var PostModel = mongoose.model('Post', PostSchema);

module.exports = PostModel;