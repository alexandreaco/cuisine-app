var express = require('express');
var app = express();


//---
// Routes

app.get('/', function (req, res) {
  res.send('welcome to cuisine')
});


//---
// Listen

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
