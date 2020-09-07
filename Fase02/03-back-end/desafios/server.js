const express = require('express');
const nunjucks = require('nunjucks');

const server = express();

const coursesData = require('./data/courses');
const linksData = require('./data/links');
const technologiesData = require('./data/technologies');

// server use static files from the public folder
server.use(express.static('public'));

// set the server to engine html files
server.set('view engine', 'njk');

// configure nunjucks
nunjucks.configure('views', {
  express: server,
  autoescape: false,
  noCache: true,
});

server.get('/', function (req, res) {
  const about = {
    title: 'Sobre',
    name: 'Rocketseat',
    logo_url: 'https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh_400x400.jpg',
    avatar_url: '<a target="_blank" href="https://rocketseat.com.br">Rocketseat</a>',
    presentation: 'As melhores tecnologias em programação, direto ao ponto e do jeito certo.',
    description: 'No meio de tanta informação e da quantidade de ferramentas que surgem todos os dias, você precisa de alguém que te leve na direção certa.',
  }

  const techs = technologiesData;
  const links = linksData;

  return res.render('about', { 
    about: about, 
    techs: techs, 
    links: links,
  });
});

server.get('/courses', function (req, res) {
  const courses = coursesData;

  return res.render('courses', {
    courses: courses,
  });
});

server.get('/courses/:id', function(req,res){           //passando o id do curso pela rota 
  const id = req.params.id;                           //pegando o id da rota

  const techs = technologiesData;
  const links = linksData;
  
  const course = coursesData.find(function(course){   //fazemos uma iteração com cada item do array dataCourse
      return course.id == id;                          //verificamos se o id da rota é igual ao id de algum item no array
  });
  if(!course){
      return res.render('not-found');
  }

  return res.render("course", { 
    course: course,
    techs: techs, 
    links: links,
  });

});


// if not found
server.use(function (req, res) {
  res.status(404).render('not-found');
});


server.listen(5000, function () {
  console.log('🚀 server is running');
});