const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses = require('./data');
const technologies = require('./data');

// server use static files from the public folder
server.use(express.static('public'));

// set the server to engine html files
server.set('view engine', 'njk');

// configure nunjucks
nunjucks.configure('views', {
  express: server
});

// routes
// initial page
server.get('/', function (req, res) {
  return res.render('courses', { items: courses });
});

// about page
server.get('/about', function (req, res) {
  return res.render('about', { items: technologies });
});

// if not found
server.use(function (req, res) {
  res.status(404).render('not-found');
});


server.listen(5000, function () {
  console.log('🚀 server is running');
});