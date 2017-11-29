var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:32770/node-blog',{
  userMongoClient: true
});