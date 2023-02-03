console.log("Leo" && 20 && "Leh");
// caso o JS não encontre nada falso, ele retornará o último valor, literalmente. Caso haja algum numero com valor, ele retornará o numero. Caso não tenha um numero, ele retornará a última expressão, no caso, "Leh".
// Caso tenha alguma expressão 'false', ele retorna o 'false'.
// Caso tenha alguma expressão 'false' no início da expressão, ele não lê a expressão inteira, pois ele já sabe e já retorna o valor 'false'. Isso chamamos de curto-circuito.

console.log("Leo" && 0 && "Leh");
console.log("Leo" && NaN && "Leh");
console.log("Leo" && undefined && "Leh");
// Nesses 3 exemplos acima, temos valores que não são verdadeiros e que podem ser falsos. No caso, o JS já identifica esses valores e age como se fossem 'false', fazendo a leitura de curto circuito e parando a operação. O JS vai exibir o valor desse elemento com seu valor,  ao invés de exibir 'false' no console.

/*
Esses são os valores falsos por padrão 
0
'', "", ``
null / undefined
NaN
*/

function falaOi() {
  return "Oi";
}

const executar = false;

console.log(executar && falaOi()); //no caso, exibe 'false' e não executa. O JS nem chega a ler o resto da expressão, no caso, o 'falaOi', pois como já ha um 'false', ele já sabe o resultado e não precisa ler o resto, o que define uma avaliação de 'curto-circuito'.

// no caso do 'OU', ||, caso já tenha um valor verdadeiro, ele não lê o resto da expressão e já executa ou exibe a ação, pois qualquer expressão verdadeira, dá 'true'.

console.log(0 || false || null || "Leo" || true || 0);
// No caso, ele imprimiu a primeira declaração verdadeira, ignorando os subsequentes, sejam eles 'true' ou 'false'. A expressão já é verdadeira.
