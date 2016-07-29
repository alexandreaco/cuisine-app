var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var cors = require('cors');



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
// Body parser

app.use(bodyParser.json());
app.use(cors());



//---
// Routes

app.get('/', function (req, res) {
  Ingredient.find(function (err, doc) {
    res.send(doc);
  })
});

app.get('/ingredients', function (req, res) {
  console.log('hit /ingredients route');
  Ingredient.find(function (err, doc) {
    res.send(doc);
  })
});

app.post('/addIngredient', function (req, res) {
  console.log('hit /addIngredient route');
  var newIngredient = new Ingredient({
      name: req.body.name,
      type: req.body.type,
      cost: req.body.cost,
      unit: req.body.unit,
  });

  newIngredient.save(function (err) {
    if (err) {
      console.log(err);
      res.send(err);
    } else {
      console.log('added ingredient!');
      Ingredient.find(function (err, doc) {
        res.send(doc);
      })
    }
  })
});

app.post ('/editIngredient', function (req, res) {
  console.log('hit /editIngredient route');
  Ingredient.update({
    _id: req.body._id,
    }, {
      $set: {
        name: req.body.name,
        type: req.body.type,
        cost: req.body.cost,
        unit: req.body.unit,
      }
    },

    function (err) {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        Ingredient.find(function (err, doc) {
          res.send(doc);
        });
      }
    });
});

app.post ('/deleteIngredient', function (req, res) {
  console.log('hit /deleteIngredient route');

  Ingredient.remove({ _id: req.body._id }, function (err) {
    if (err) {
      console.log(err);
      res.send(err);
    }
    else {
      Ingredient.find(function (err, doc) {
        res.send(doc);
      });
    }
  });
});



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
