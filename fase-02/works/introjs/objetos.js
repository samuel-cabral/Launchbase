// Criar uma programa que calcula a
// a média entre as notas dos alunos 

// Exemplos de objects
const aluno01 = {
  nome: "Mayk",
  nota: 9.8
}

const aluno02 = {
  nome: "Diego",
  nota: 10
}

const aluno03 = {
  nome: "Fulano",
  nota: 2
}

// array de objects
const alunos = [
  {
    nome: "Mayk",
    nota: 9.8
  },
  {
    nome: "Diego",
    nota: 10
  },
  {
    nome: "Fulano",
    nota: 2
  }
]

// calcula e média...
const media = (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
// e mostra na tela.
console.log(media)
