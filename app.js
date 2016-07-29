var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');



//---
// Connect to Database

mongoose.connect('mongodb://localhost/cuisine');

var ingredientSchema = {
  name: String,
  type: String,
  cost: Number,
  unit: String,
}

var Ingredient = mongoose.model('Ingredient', ingredientSchema, 'ingredients');



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
