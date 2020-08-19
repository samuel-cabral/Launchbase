// Armazena os alunos da turma A
const turmaA = [
  { nome: "Mayk", nota: 9.8 },
  { nome: "Diego", nota: 10 },
  { nome: "Fulano", nota: 2 },
  { nome: "Beltrano", nota: 8 },
];

const turmaB = [
  { nome: "Cleiton", nota: 10 },
  { nome: "Robson", nota: 10 },
  { nome: "Siclano", nota: 0 },
];

/* CALCULA A MÉDIA DAS NOTAS DOS ALUNOS DE UMA TURMA */
function calculaMedia(alunos) {
  let soma = 0;

  for (let i = 0; i < alunos.length; i++) {
    soma = soma + alunos[i].nota;
  }

  const media = soma / alunos.length;
  console.log(media);
  return media;
}

// armazena as médias das turmas...
const media1 = calculaMedia(turmaA);
const media2 = calculaMedia(turmaB);

function enviaMensagem(media, turma) {
  if (media > 5) {
    console.log(`A média da turma ${turma} foi maior que 5. Parabéns!`);
  } else {
    console.log(`A média da turma ${turma} foi menor que 5.`);
  }
}

enviaMensagem(media1, "turmaA");
enviaMensagem(media2, "turmaB");
