// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var countries = require ('./models/countries.json')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

// Routes \\
app.get('/', function(req, res){
  res.sendFile('home.html', {root:'./public'})
});

app.get('/countries', function(req, res){
  res.send(countries)
  // console.log(countries)
});

app.post('/search', function(req, res){
  console.log(req.body.country)

  // console.log(countries)

// var filteredCountry = countries.filter(callbackfn[, req.body.country])
// console.log(filteredCountry) ASK ROB ABOUT THIS

  for (var i = 0; i < countries.length; i++) {
    if (countries[i].name === req.body.country)
      var searchedForCountry = countries[i]
        // JSON.parse(searchedForCountry)
  };
  console.log(searchedForCountry)
  res.send(searchedForCountry)

})

// app.get('/search', function(req, res){

// })

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})