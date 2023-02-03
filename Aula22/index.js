/*
Operadores de comparação,
> maior que
>= maior que ou igual a
< menos que
<= menor que ou igual a
== igualdade (valor) - Não é recomendado usar.
=== igualdade estrita (valor e tipo)
!= diferente (valor) - Não é recomendado.
!== diferente estrito (valor e tipo)
*/

const comp = 10 > 5;
console.log(comp);
const comp2 = 10 >= 10;
console.log(comp2);
const comp3 = 10 < 11;
console.log(comp3);
const comp4 = 10 <= 11;
console.log(comp4);

const num1 = 10;
const num2 = "10";
const comp5 = num1 == num2;
console.log(comp5); // vai sair 'true', mesmo sendo um number e uma string, por isso não é recomendado usar este operador.

const nume1 = 10;
const nume2 = "10";
const comp6 = nume1 === nume2;
console.log(comp6); // agora sai como 'false', pois este operador checa tanto o valor quanto o tipo. É o mais indicado para operadores.

const numer1 = 10;
const numer2 = "10";
const comp7 = numer1 != numer2;
console.log(comp7); // aqui tb sai 'false', pois este operador tb compara somente valor. Também não é indicado.

const numer01 = 10;
const numer02 = "10";
const comp8 = numer01 !== numer02;
console.log(comp8); // aqui sai como 'true', pois compara valor e tipo. É mais indicado para ser usado como operador.
