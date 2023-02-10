// no 'for', sabemos quantos elementos ou o tamanho do que estamos querendo utilizar, como o tamanho do array ou o número dos seus elementos. Sabemos melhor quantas vezes o laço irá de repetir.
//podemos utilizar o 'while' e 'do while' quando não sabemos até quanto o laço pode ir ou se a condição será cumprida.
let i = 0;

while (i <= 10) {
  console.log(i);
  i++;
}

// temos que tomar um pouco e cuidado, pois se não colocarmos uma condição clara para fazer o laço de repetição parar, podemos deixar o laço se repetindo infinitamente, e isso pode travar o seu programa. Temos que lembrar que o 'while' executará infinitamente se não houver uma condição para que ele pare. No caso acima, se não houvesse o incremento, ele iria imprimir 0 para sempre.

const nome = "Leonardo";

while (i < nome.length) {
  console.log(nome[i]);
  i++;
}
// podemos até usar o 'while' acima, mas para isso seria mais fácil usar o 'for'

console.log("____________________"); // pra separar

function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 50;

let rand = random(min, max);
console.log(rand);
//acima é apenas uma função de exemplo para gerar um numero aleatório entre 0 e 50, abaixo vamos ao while.

while (rand !== 10) {
  rand = random(min, max);
  console.log(rand);
}
console.log("______________"); //separar

//com a condicional de 'while', mandamos ele gerar numeros aleatório até encontrar o numero 10, então, encontrado o 10, o laço pára.

//enquanto o 'while' executa somente se a condição não for válida, ou seja, primeiro ele checa a condição e só roda caso ela não estiver sendo suprida, o 'do while' primeiro executa para depois checar a condicional, ou seja, ele sempre irá rodar pelo menos 1 vez, pois a condição irá impedir, no máximo, que ele repita.

do {
  rand = random(min, max);
  console.log(rand);
} while (rand !== 10);

console.log("________");

let num1 = 10;
do {
  console.log(num1);
} while (num1 !== 10);

// aqui, ele executa pelo menos uma vez, mesmo o valor sendo 10. Ele executa o bloco pedido e só depois ele checa, garantindo a execução pelo menos uma vez.
