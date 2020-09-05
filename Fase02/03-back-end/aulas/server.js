// INITIALIZE EXPRESS AND NUNJUCKS
const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const videos = require('./data');

// EXPRESS USE STATIC FILES OF THE public FOLDER
server.use(express.static('public'));

// if not found page

server.set('view engine', 'njk');

// SET NUNJUCKS TO CONFIGURE views FOLDER
nunjucks.configure('views', {
  express:server,
  autoescape: false,
  noCache: true
});

// ROUTES
server.get('/', function (req, res) {
  const about = {
    avatar_url: 'https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4',
    name: 'Mayk Brito',
    role: 'Instrutor | Rocketseat',
    description: 'Programador full-stack, focado em trazer o melhor ensino para iniciantes em programação. Colaborador da <a target="_blank" href="https://rocketseat.com.br"><strong>Rocketseat.</strong></a>',
    links: [
      { name: 'Github', url: 'https://github.com/maykbrito' },
      { name: 'Twitter', url: 'https://twitter.com/maykbrito' },
      { name: 'LinkedIn', url: 'https://linkedin.com/in/maykbrito' }
    ]
  }
  
  return res.render('about', { about });  
});

server.get('/portfolio', function (req, res) {
  return res.render('portfolio', { items: videos });
});

server.get('/video', function (req, res) {
  const id = req.query.id;
  
  const video = videos.find(function (video) {
    return (video.id == id);
  });
  
  if (!video) {
    return res.status(404).render('not-found');
  }
  
  return res.render('video', { item: video });
});


server.use((req, res) => { res.status(404).render('not-found') });

// START SERVER
server.listen(5000, function () {
  console.log('🚀 server is running');
});

