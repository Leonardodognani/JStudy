/*
Aritiméticos
+ Adição / concatenação
- Subtração
/ Divisão
* Multuiplicação
** Potenciação
% Resto da divisão
++ incremento
-- decremento
*/

const num1 = 5;
const num2 = 10;

console.log(num1 + num2); // resultado = 15
// se algum for string, ele concatena ao invés de somar

console.log(num1 - num2); // resultado é -5

console.log(num1 ** num2); // resultado é 9765625

console.log(num1 % num2); // resultado é 5

let contador = 2;
contador++; // 3
contador++; // 4
contador++; // 5
contador++; // 6
contador--; // 5
contador--; // 4

console.log(contador); // 4

contador += 2; // igual a contador = contador + 2

console.log(contador); // 6

contador *= 2; // contador = contador * 2;
console.log(contador); // 12

contador **= 2; // contador = contador elevado a 2 (contador * contador) // 144
contador **= 3; //contador = contador elevado a 3 (contador * contador * contador) // 2.985.984
console.log(contador);
