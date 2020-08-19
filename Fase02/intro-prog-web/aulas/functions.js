// Armazena os alunos da turma A
const alunosDaTurmaA = [
  { nome: "Mayk", nota: 9.8 },
  { nome: "Diego", nota: 10},
  { nome: "Fulano", nota: 2},
]

// Cfunção que calcula e média das notas de uma turma de 3 alunos
function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}


const alunosDaTurmaB = [
  { nome: "Cleiton", nota: 10 },
  { nome: "Robson", nota: 10},
  { nome: "Siclano", nota: 0},
]

function calculaMedia(alunos) {
  return (alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3
}

// armazena as medias...
const media1 = calculaMedia(alunosDaTurmaA)
const media2 = calculaMedia(alunosDaTurmaB)

// e imprime no console
console.log(media1)
console.log(media2)