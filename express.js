var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('./testPipe.js', function (req, res) {
  res.send(app.res)
})