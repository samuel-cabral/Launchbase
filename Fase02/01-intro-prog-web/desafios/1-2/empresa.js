/* 
Crie um programa que armazena dados da empresa Rocketseat dentro de um objeto chamado empresa. Os dados a serem armazenados são:

  Nome: Rocketseat
  Cor: Roxo
  Foco: Programação
  Endereço:
    Rua: Rua Guilherme Gembala
    Número: 260
*/

// Dados da empresa
const empresa = {
  nome: "Rocketseat",
  cor: "roxo",
  foco: "programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: 260,
  },
};

// imprime "A empresa Rocketseat está localizada em Rua Guilherme Gembala, 260"
console.log(
  `A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}.`
);
