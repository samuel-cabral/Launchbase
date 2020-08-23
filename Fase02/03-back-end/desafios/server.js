const express = require('express');
const nunjucks = require('nunjucks');

const server = express();
const courses = require('./data');

// server use static files from the public folder
server.use(express.static('public'));

// set the server to engine html files
server.set('view engine', 'njk');

// configure nunjucks
nunjucks.configure('views', {
  express: server,
  autoescape: false
});

// routes
// initial page
server.get('/', function (req, res) {
  return res.render('courses', { items: courses });
});

// about page
server.get('/about', function (req, res) {
  const about = {
    title: 'Sobre',
    name: 'Rocketseat',
    logo_url: 'https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh_400x400.jpg',
    avatar_url: '<a target="_blank" href="https://rocketseat.com.br">Rocketseat</a>',
    presentation: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo.',
    description: 'No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.',
    
    technologies: [
      { title: 'NodeJS', logo: 'https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png'},
      { title: 'ReactJS', logo: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K'},
      { title: 'React Native', logo: 'https://s3.amazonaws.com/media-p.slid.es/uploads/118447/images/2991881/reactpurple.png'},
    ],
    
    links: [
      { name: 'Github', url: 'https://github.com/rocketseat' },
      { name: 'Instagram', url: 'https://instagram.com/rocketseat_oficial' },
      { name: 'Facebook', url: 'http://fb.com/rocketseat' }
    ]
  }
  return res.render('about', { about });
});

// if not found
server.use(function (req, res) {
  res.status(404).render('not-found');
});


server.listen(5000, function () {
  console.log('🚀 server is running');
});