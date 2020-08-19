// INITIALIZE EXPRESS AND NUNJUCKS
const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

// EXPRESS USE STATIC FILES OF THE public FOLDER
server.use(express.static('public'));

server.set('view engine', 'njk');

// SET NUNJUCKS TO CONFIGURE views FOLDER
nunjucks.configure('views', {
  express:server
});

// ROUTES
server.get('/', function (req, res) {
  return res.render('about');
});

server.get('/portfolio', function (req, res) {
  return res.render('portfolio');
});

// START SERVER
server.listen(5000, function () {
  console.log('🚀 server is running');
});

