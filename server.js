///// DEFINE AND REQUIRE ALL DEPENDENCIES WE NPM-INSTALLED /////

var express = require('express');
var app = express(); // create the app with express
var bodyParser = require('body-parser'); // pull information from HTML POST
var methodOverride = require('method-override'); // simulate DELETE and PUT (let's you be more explicit in what kind of POST you're doing)

///// CONFIGURE THOSE REQUIREMENTS FOR THE APP TO USE THEM /////

app.use(express.static(__dirname + '/public')); // tells the app where to look for static files like images, js and css
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(methodOverride()); // tells it to use methodOverride

app.set('view engine', 'ejs'); // Sets the view engine to EJS rather than the default Jade

///// TELL IT WHERE TO RUN /////

app.listen(process.env.port || 3000);  // app.listen(3000) works, but only locally. Once deployed to Heroku/AWS/whatever, port 3000 might not always be available, so it's best to let it accept a parameter based on an environmental variable from the host. If there is no EV, it'll run on port 3000.


///// SET UP DEM ROUTES MOTHAFUCKAAAAAA /////

app.get('/', function(req, res){
  res.render('pages/index.ejs');
});

app.get('/list', function(req, res){
  res.render('pages/list.ejs');
});






