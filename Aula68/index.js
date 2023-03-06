// Map.
// Map é bem similar a filter.
// Map usa os valores do array original e apresenta um novo array, sem alterar o original.
// Map também sempre terá o mesmo número de índice da array original
//vamos ver uns exemplos:

//Dobre os numeros
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];
const numerosEmDobro = numeros.map((valor) => valor * 2);
console.log(numerosEmDobro);
// assim como filter, map tb irá ler todos os elementos, um a um, aplicando a condição desejada e criando um novo array com os parâmetros criados.

// para cada elemento:
// Retorne apenas uma string com o nome da pessoa
// remove apenas a chave "nome" do objeto
// Adicione uma chave 'id' em cada objeto
const pessoas = [
  { nome: "Leo", idade: 37 },
  { nome: "Leh", idade: 26 },
  { nome: "Pedro", idade: 25 },
  { nome: "Ramon", idade: 37 },
  { nome: "Leticia", idade: 52 },
  { nome: "Leonardo", idade: 63 },
];

const nomes = pessoas.map((obj) => obj.nome);
console.log(nomes);

const idades = pessoas.map((obj) => ({ idade: obj.idade }));
console.log(idades);

const comIds = pessoas.map(function (obj, indice) {
  const newObj = { ...obj }; //para não alterar o original
  newObj.id = indice + 1;
  return newObj;
});
console.log(comIds);
console.log(pessoas);
