const express = require('../index.js')
const app = express()

// 处理GET请求
app.get(function(req, res) {
  res.end('You send GET request')
})
// 处理POST请求
app.post(function(req, res) {
  res.end('You send POST request')
})
// 处理PUT请求
app.put(function(req, res) {
  res.end('You send PUT request')
})
// 处理DELETE请求
app.delete(function(req, res) {
  res.end('You send DELETE request')
})

app.listen(3000)