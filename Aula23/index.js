/*
Operadores lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/

// && - precisa que todas as expressões sejam verdadeira para que ela retorne verddeira, senão, o resultado será 'false'.
const expr = true && true && true && true;
console.log(expr);

// || - Alguma das expressões precisa ser verdadeira para que o retorno seja 'true'.
const expre = false || true;
console.log(expre);

// ! - nega ou inverte uma expressão.
console.log(true); // imprime 'true'
console.log(!false); // aqui, negamos o 'false', então retorna 'true';
// É possível "negar" varias vezes, invertendo cada vez que for usado.
console.log(!!true); // aqui volta ser 'true', pois ele nega e depois nega novamente, voltando ao original.
