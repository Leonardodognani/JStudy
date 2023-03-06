// some todos os numeros (Reduce)
// Retorne um array com os pares (Filter)
// retorne um array com o dobro dos valores (Map)

// o Reduce consegue replicar os métodos de filter e map, pois é muito versátil. Porém, não é indicado que seja usado para essas operações.

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor) {
  acumulador += valor;
  return acumulador;
}, 0); // aqui definimos o acumulador como 0, ou seja, seu valor inicial. Caso não haja um acumulador definido, seu valor será igial ao primeiro elemento do Array
console.log(total); // aqui ele irá exibir a soma de todos os elementos, no caso, 236

//vamos exibir um array com os numeros pares agora:
const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total2 = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) acumulador.push(valor);
  return acumulador;
}, []); // aqui definimos o acumulador como um array vazio '[]', assim, quando a condição de valor for true, ele irá fazer um 'push(valor)' no acumulador. Dessa forma, ele apenas irá adicionar os numeros pares para esse novo array
console.log(total2);

//o exemplo acima´é basicamente uma função de filter. Então o melhor é sempre usar filter para esse tipo de operação ao invés de reduce.

const numeros3 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total3 = numeros.reduce(function (acumulador, valor) {
  acumulador.push(valor * 2);
  return acumulador;
}, []);
console.log(total3);
// no exemplo acima, estamos usando uma função de map. Portanto, o ideal é usarmos map para tal, e não reduce.

//o original do reduce() é reduzir em um valor os elementos.

//se quisermos adicionar somente os pares, podemos fazer assim:
const numeros4 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total4 = numeros.reduce(function (acumulador, valor) {
  if (valor % 2 === 0) acumulador += valor;
  return acumulador;
}, 0); // aqui definimos o acumulador como 0, assim, senão a proposta daria errado, pois ele adicionaria '5', um numero ímpar. Dessa forma, ele apenas irá adicionar os numeros pares na soma.
console.log(total4);

// retorne a pessoa mais velha
const pessoas = [
  { nome: "Leo", idade: 37 },
  { nome: "Leh", idade: 26 },
  { nome: "Pedro", idade: 25 },
  { nome: "Ramon", idade: 37 },
  { nome: "Leticia", idade: 52 },
  { nome: "Leonardo", idade: 63 },
];

const maisVelha = pessoas.reduce(function (acumulador, valor) {
  if (acumulador.idade > valor.idade) return acumulador;
  return valor;
});

console.log(maisVelha);

// neste caso, ele irá checar cada elemento do objeto. Se a idade for maior, ele passa a ser o acumulador. Na próxima linha, ele checa se o atual acumulador é maior. Se for, ele se torna o acumulador, se não, ele passa para a próxima linha. Dessa forma, o maior idade se torna o acumulador e é exibida no final como 'maior idade'.
