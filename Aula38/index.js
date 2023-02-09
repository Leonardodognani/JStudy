//outro nome pra arrays de somente uma dimensão, sem ter outro array dentro deste, pode ser também 'Vetor'.

const frutas = ["Pêra", "Maçã", "Uva"];
// assim é uma forma para ele ler o índice .
for (let i in frutas) {
  // 'i' pode ser chamado de qlqr nome apropriado
  console.log(frutas[i]);
}

// No caso, o 'for in' lê os índices ou chaves do objeto

const pessoa = {
  nome: "Leo",
  sobrenome: "Dognani",
  idade: 37,
};

for (let chave in pessoa) {
  console.log(chave); // assim lê a chave.
}

console.log(pessoa["nome"]); // aqui ele pega o 'nome' do objeto.
for (let chave in pessoa) {
  console.log(chave, pessoa[chave]); // assim lê todos os objetos com suas chaves
}
