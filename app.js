// Requires \\
var express = require('express');
var bodyParser = require('body-parser');
var countries = require ('./models/countries.json')
var mongoose = require('mongoose');
var db = require('./models/db.js')

// Create Express App Object \\
var app = express();

// Application Configuration \\
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));


// // //pushing a false boolean for has travlled
for (var i = 0; i < countries.length; i++) {
  countries[i].hasTravelled = ""
};

// Routes \\
app.get('/', function(req, res){
  res.sendFile('home.html', {root:'./public'})
});

// app.get('/countries', function(req, res){
  // res.send(countries)
  // console.log(db.countriesDB.find({})
// });

app.get('/retrieveVisited', function(req, res){
  db.Country.find({hasTravelled: "true"}, function(err,doc){
    console.log(doc)
    res.send(doc)
  })  
})



app.post('/search', function(req, res){
    console.log(req.body.country)
    db.Country.find({name:new RegExp(req.body.country)} , function(err, doc){
      res.send(doc)
    })
})

app.post('/hasbeen', function(req, res){
  

  db.Country.findOne({name:req.body.name} , function(err, doc){
      doc.hasTravelled = req.body.hasTravelled
      doc.save()
      console.log(doc)
    })    
})

// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})