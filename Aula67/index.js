// filter - vai sempre retornar uma array com a mesma quantidade de elementos ou menos.
// Os três métodos importantes
// Filter vai filtrar o array,
// Map vai modificar o Array
// Reduce vai reduzir em um único valor

// aqui veremos Filter

//retorne os números maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 8, 7, 11, 15, 22, 27];

function callbackFilter(valor) {
  return valor > 10;
}

const numerosFiltrados = numeros.filter(callbackFilter);
console.log(numerosFiltrados);
//no caso, o filter vai usar a função em cada elemento do array, como se fosse um 'for', verificando/lendo cada elemento um a um. Se for true, ele aplica, se for false, ele pula.

// o mais comum é usar filter com a function dentro do método. Para isso podemos diminuir mais o código.
const numerosFiltrados2 = numeros.filter((valor) => valor > 10);
console.log(numerosFiltrados2);

// Retorne  as pessoas que tem o nome com 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com 'a'
const pessoas = [
  { nome: "Leo", idade: 37 },
  { nome: "Leh", idade: 26 },
  { nome: "Pedro", idade: 25 },
  { nome: "Ramon", idade: 37 },
  { nome: "Leticia", idade: 52 },
  { nome: "Leonardo", idade: 63 },
];

const pessoasComNomeGrande = pessoas.filter((obj) => obj.nome.length >= 5);
console.log(pessoasComNomeGrande);

const pessoas50Mais = pessoas.filter((obj) => obj.idade > 50);
console.log(pessoas50Mais);

const pessoasNomeFinalA = pessoas.filter((obj) =>
  obj.nome.toLowerCase().endsWith("a")
);
console.log(pessoasNomeFinalA);
