/* OPERADORES DE COMPARAÇÃO

  > ...........   "Maior"
  < ...........   "Menor"
  >= ...........  "Maior ou igual a"
  <= ...........  "Menor ou igual a"
  == ...........  "Igual a"
  === ........... "Igual e do mesmo tipo" 
  != ...........  "Diferente de"
  !== ........... "Diferente de, inclusive o tipo"

  ================================================
*/

// DESAFIO 1
// Verfificar se uma pessoa é maior de 18 anos
// const idade  = 17
// // se sim, deixar a pessoa entrar
// if (idade >= 18) {
//   console.log('Deixar entrar')
// } else {
//   console.log('Bloquear entrada')
// }

// // se a pessoa tiver 17 anos, 
// // avisar para voltar quando tiver 18 anos
// if (idade === 17) {
//   console.log('Volte quando tiver 18 anos')
// }

/* OPERADORES LÓGICOS
  
  && "E" As duas condições devem ser verdadeiras para que a condição
      resultante seja verdadeira

  || "OU" Uma das condições deve ser verdadeira para que a condição
      resultante seja verdadeira
  
*/


// DESAFIO 1 otimizado com operadores lógicos
// Verificar se a pessoa é maior de 18
const idade = 18
// se for menor de 18 e igual a 17
if (!(idade >= 18) || (idade === 17)) {
  console.log('Bloquear a entrada')
} else {
  console.log('Deixar entrar')
}