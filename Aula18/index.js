// Para criar funcções, as regras para nomear são as mesas das variáveis
function saudacao(nome) {
  console.log(`Bom dia, ${nome}`);
}

saudacao("Leonardo");
saudacao("Letícia");
saudacao("Lucifer");

// depois de declarada, podemos atribuir parâmetros, que são mcomo variáveis que podem ser chamadas dentro do corpo da função.
//Quando 'chamamos' a função, podemos definir o valor das variáveis, como no exemplo acima.

function saudacao2(nome) {
  console.log(`Bom dia, ${nome}`);
  return 123456;
}

const nomeVariavel = saudacao2("Leo");
console.log(nomeVariavel);

// neste caso, adicionamos o 'return' na função. Ela é executada damesma forma, mas quando atribuímos uma variável para chamar a função, assim que pedimos para exibir seu valor, ela usará o 'return', pois a função estará 'retornando' o valor proposto por nós. Porém, não é o ideal que uma função retorne algo sem ligação com o conteúdo.

function saudacao3(nome) {
  return `Bom dia ${nome}!`;
}

const variavel = saudacao3("Camarada");
console.log(variavel);

//neste caso acima, o uso torna-se mais correto, pois estamos retornando a frase proposta com o parâmetro colocado pelo usuário.

function soma(x, y) {
  const resultado = x + y;
  return resultado;
}

console.log(soma(2, 2));
console.log(soma(3, 5));
console.log(soma(5, 10));

// acima criamos uma função que faz a soma de 2 números. Quando chamamos a função, ela retorna a ação pedida, no caso, a soma de 2 numeros.

//as variáveis dentro do escopo da função estão protegidas, ou seja, não conseguimos acessar ou midificar pelo lado de fora.

//sempre que a engine do JS encontrar a palavra 'return', ela não lê nada mais abaixo nas linhas de códigos.

function soma2(x = 1, y = 1) {
  const resultado = x + y;
  return resultado;
}

const resultado2 = soma2(3, 6);
console.log(resultado2);

// caso a gente defina valores nos parâmetros da função, neste caso, x e y possuem valor de '1', o resultado será sempre 2. Porém, podemos atribuir os parâmetros mesmo assim, substituindo um ou ambos os valores, mantendo assim, neste exemplo, sempre valor mínimo de 1 em qualquer elemento, para que sempre haja um numero ou valor mínimo.

// função anônima:

const raiz = function (n) {
  return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

//no caso acima, primeiro declaramos uma variável e atribuímos a ela uma função. Neste caso, a função está 'anônima', pois não possui nomeação. A função retorna a raiz quadrada de um número, representado por 'n'. A função também é chamada da mesma forma.

// Arrow function
const raiz2 = (n) => {
  return n ** 0.5;
};

console.log(raiz2(81));
console.log(raiz2(36));
console.log(raiz2(49));

//no caso, ela é mais simplificada, mas funciona da mesma forma que a anterior, substituindo o nome 'function' por uma "seta", formada pelo sinal '=' e '>'.

//outra forma mais simplificada, usada para funções simples como a última, de apenas um parâmetro e um return simples, pode ser escrita dessa forma:

const raiz3 = (n) => n ** 0.5;

//percebe-se que o código ficou menor e mais dinâmico, com apenas uma linha reta e simples.
// ao chamar os valores, ela funciona da mesma forma:

console.log(raiz3(100));
console.log(raiz3(4));
console.log(raiz3(64));
