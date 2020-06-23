// Cálculo de aposentadoria
// Crie um programa para calcular a aposentadoria de uma pessoa

// Obs.: Esse cálculo é fictício, dentro da aposentadoria existem muitos outros
// fatores para serem levados em conta :)

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

// O tempo de contribuição mínimo para homens é de 35 anos e, para mulheres, 30 anos;
const contribuicaoHomens = 35;
const contribuicaoMulheres = 30;

/* 
Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem 
precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma; */
let soma95 = idade + contribuicaoHomens;
let soma85 = idade + contribuicaoMulheres;


/* 
Com base nas regras acima imprima na tela as mensagens:
    SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
    SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
*/

if ((contribuicao === contribuicaoHomens) || (contribuicao === contribuicaoMulheres)) {
  if ((soma85 === 85) || soma95 === 95) {
    console.log(`${nome}, você pode se aposentar!`)
  }

} else {
  console.log(`${nome}, você tem ${contribuicao} anos de contribuição`)
  console.log(`${nome}, você ainda não pode se aposentar!`)
}
