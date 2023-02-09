//Repetição
console.log("linha 0");
console.log("linha 1");
console.log("linha 2");
console.log("linha 3");
console.log("linha 4");
console.log("linha 5");

//usando o 'for', criamos uma estrutura de repetição:

// i = index
//declarar a variável;
//condição pra ser verificada;
//incremento.
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// podemos tb mudar todos os parâmetros, começando no i = 500, pondo a condição de i <= 400 e decrementando (subtraindo) de 10 em 10 com i -= 10.
//ALém disso, podemos exibir mais do que os numeros puros, mostrando o quanto esta ferramenta de 'for' é importante.
for (let i = 500; i >= 400; i -= 10) {
  console.log(`Linha ${i}`);
}

//também é possível declarar variáveis e condições:
for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0; //aqui atribuímos a variável 'par' os numeros que podem ser divididos por 2 cujo o resto é === 0. No caso, os números pares.
  console.log(i, par); // ele irá imprimir todos os números, mas delegando 'true' ou 'false' para cada um deles.
}

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? "par" : "ímpar"; // aqui usamos um ternário para dizer que se a condição for a desejada, o resultado será 'par', se não for (else), será 'ímpar'.
  console.log(i, par); // ele imprime os numeros seguidos de 'par' ou 'ímpar'.
}

//vamos ver um exemplo com array
const frutas = [
  "maçã",
  "pêra",
  "uva",
  "goiaba",
  "banana",
  "pêssego",
  "melão",
  "graviola",
];

for (let i = 0; i < frutas.length; i++) {
  console.log(`Índice ${i}`, frutas[i]);
}
// no caso, decidimos que condição desse 'for' foi o tamanho dos elementos do array, pois enquanto i < frutas.length, ele repete o processo, incrementando 1 posição, que é o i++. Na hora de imprimir, ao invés de apenas colocarmos [i] (pois isso iria exibir somente o número do índice), usamos o nome do array, seguido do índice, com frutas[i]. Ele lê uma vez e pega 'maçã', depois ele repete o novo indice e checa a condição. Se for verdadeiro, ele faz o comando de incremento e lê o bloco novamente e desta vez ele pega 'pêra' e assim ele repete até que a condição i < frutas.length seja falsa.
