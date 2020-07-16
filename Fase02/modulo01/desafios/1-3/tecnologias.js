// Usuários e tecnologias
const usuarios = [
  { nome: "Carlos", tecnologias: ["HTML", "CSS"] },
  { nome: "Jasmine", tecnologias: ["JavaScript", "CSS"] },
  { nome: "Tuane", tecnologias: ["HTML", "Node.js"] }
];

console.log("Usuários e Tecnologias:\n")
for (let i = 0; i < usuarios.length; i++) {
  console.log(
    `${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias.join(", ")}`
  )
}

// Busca por tecnologia
function checaSeUsuarioUsaCSS(usuario) {
  for (let tecnologia of usuario.tecnologias) {
    if (tecnologia == "CSS") {
      return true;
    }
  }

  return false;
}

console.log("\nBusca por tecnologia: \n");
for (let i = 0; i < usuarios.length; i++) {
  const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i])
  if (usuarioTrabalhaComCSS) {
    console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
  }
}