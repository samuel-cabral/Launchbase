// Crie um programa com um objeto para armazenar dados de um programador como 
// nome, idade e tecnologias que trabalha.

// 1. armazenar os dados de um programador
const programador = {
  nome: "Carlos",
  idade: "21 anos",
  tecnologias: [
    { nome: 'C++', especialidade: 'Desktop' },
    { nome: 'Python', especialidade: 'Data Science' },
    { nome: 'JavaScript', especialidade: 'Web/Mobile' }
  ]
}
// 2. Imprima em tela o nome e especialidade da primeira tecnologia que o usuário utiliza no seguinte formato:
// O usuário Carlos tem 32 anos e usa a tecnologia C++ com especialidade em Desktop

/* Acrésimo meu:
Imprima na tela:
  O usuário Samuel tem 21 anos e usa a tecnologia Javascript  */
  
console.log(
  `O usuário ${programador.nome} tem ${programador.idade} 
  e usa a tecnologia ${programador.tecnologias[0].nome} 
  com especialidade em ${programador.tecnologias[0].especialidade}`
)