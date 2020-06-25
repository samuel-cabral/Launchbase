const alunosDaTurmaA = [
  {
    nome: "Mayk", 
    nota: 9.8,
  },
  { 
    nome: "Diego", 
    nota: 10,
  },
  {
    nome: "Fulano", 
    nota: 2,
  },
  { 
    nome: "Beltrano", 
    nota: 10,
  },
];

const alunosDaTurmaB = [
  {
    nome: "Cleiton",
    nota: 10,
  },
  {
    nome: "Robson",
    nota: 10,
  },
  {
    nome: "Siclano",
    nota: 0,
  }
];

/* CALCULA A MÉDIA DAS NOTAS DOS ALUNOS DE UMA TURMA */
function calculaMedia(alunos) {
  let soma = 0;

  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota;
  }

  const media = soma / alunos.length;
  return media;
}

// armazena as médias das turmas...
const media1 = calculaMedia(alunosDaTurmaA);
const media2 = calculaMedia(alunosDaTurmaB);

function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A média da turma ${turma} foi de ${media.toFixed(2)}. Parabéns!`);
  } else {
    console.log(`A média da turma ${turma} foi menor que 5.`);
  }
}

enviaMensagem(media1, "TurmaA");
enviaMensagem(media2, "TurmaB");

// marcar aluno como reprovado se nota for menor que 5
// enviar como mensagem

function marcarComoReprovado(aluno) {
  aluno.reprovado = false;
  if (aluno.nota < 5) {
    aluno.reprovado = true;    
  }
}

function enviarMensagemReprovado (aluno) {
  console.log(`O ${aluno.nome} está reprovado`)
}

function AlunoEstaReprovado(alunos) {
  for (aluno of alunos) {
    marcarComoReprovado(aluno)
    if (aluno.reprovado) {
      enviarMensagemReprovado(aluno)
    }
  }
}

AlunoEstaReprovado(alunosDaTurmaA)
AlunoEstaReprovado(alunosDaTurmaB)