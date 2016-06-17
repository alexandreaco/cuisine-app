var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});


// Add headers
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});


app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});



//---
// Routes

app.get('/ingredients', function (req, res) {
  console.log('someone is at ingredients');
  res.json({
    'ingredients' : [
      {
        '_id': '123456',
        'name': 'Produce Item',
        'type': 'produce',
        'cost': 3.5,
        'unit': 'lb'
      },
      {
        '_id': '345678',
        'name': 'Dairy Item',
        'type': 'grain',
        'cost': 5.00,
        'unit': 'gal'
      },
      {
        '_id': '123123',
        'name': 'Grain Item',
        'type': 'grain',
        'cost': 4.25,
        'unit': 'lb'
      }
    ]
  });
});
