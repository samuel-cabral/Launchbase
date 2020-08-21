const express = require('express');
const nunjucks = require('nunjucks');

const server = express();


// server use static files from the public folder
server.use(express.static('public'));

// set the server to engine html files
server.set('view engine', 'html');

// configure nunjucks
nunjucks.configure('views', {
  express: server
});

// routes
server.get('/', function (req, res) {
  return res.render('about')
});


server.get('/courses', function (req, res) {
  return res.send('courses')
})

server.listen(5000, function() {
  console.log('🚀 server is running');
});