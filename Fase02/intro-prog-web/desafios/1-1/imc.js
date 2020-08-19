/* Cálculo de imc
  Crie um programa para calcular o imc e nível de obesidade de um pessoa
 */

const nome = "Samuel";
const peso = 110;
const altura = 1.87;

// formula do imc
const imc = peso / (altura * altura);
// mostra resultado do cálculo
console.log(`${nome}, seu imc é igual a ${imc}!`);

// se o imc for maior ou igual a 30: Carlos está acima do peso
if (imc >= 30) {
  console.log(`${nome}, você está acima do peso.`);
} 

// se o imc for menor que 29.9: Carlos não está acima do peso
if (imc < 29.9) {
  console.log(`${nome}, você não está acima do peso`);
}

