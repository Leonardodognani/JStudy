// IEEE 754-2008

let num1 = 10.7539069079;
let num2 = 2.5;

console.log(num1.toString() + num2);
//apenas nessa operação de mostrar no console, o 'num1' se torna uma string, mas o valor da variável 'num1' continua como Number.

num1 - num1.toString();
console.log(num1.toString(2));
//nesse caso, ele irá mostrar sua representação binária.

console.log(num1.toFixed(2));
//limita os decimais ao numero desejado no parâmetro.

console.log(Number.isInteger(num1));
// ele vê se o numero é inteiro, usando booleano true ou false.

let temp = num1 * "olá";
console.log(temp);
// aqui tentamos multiplicar um número por uma string, o que é impossível. O JS irá retornar NaN = Not a Number (Não é um número). Eentão podemos usar um método para confirmar:
console.log(Number.isNaN(temp));
// Neste caso, ele retornaria 'true', uma vez que confirmamos que não é um número.

let nume1 = 0.7;
let nume2 = 0.1;

nume1 += nume2; // 0.8
nume1 += nume2; // 0.9
nume1 += nume2; // 1.0
nume1 += nume2; // 1.1
nume1 += nume2; // 1.2
nume1 += nume2; // 1.3
nume1 += nume2; // 1.4
nume1 += nume2; // 1.5
nume1 += nume2; // 1.6
nume1 += nume2; // 1.7
nume1 += nume2; // 1.8
nume1 += nume2; // 1.9
nume1 += nume2; // 2.0

console.log(nume1); // a saída sempre sera 0.999999999, mostrando que ha uma imprecisão no JS, mesmo que mínimo.
//Para consertar, podemos usar outro método:
nume1 = parseFloat(nume1.toFixed(2)); //Neste caso, o numero será arredondado para se tornar inteiro.
console.log(nume1);
console.log(Number.isInteger(nume1));
//verificamos se é um número inteiro e o resultado é 'true'.

//outra forma de resolver seria:

let numer1 = 0.7;
let numer2 = 0.1;
numer1 = (numer1 * 100 + numer2 * 100) / 100; // 0.8
numer1 = (numer1 * 100 + numer2 * 100) / 100; // 0.9
numer1 = (numer1 * 100 + numer2 * 100) / 100; // 1
console.log(numer1);
// neste caso, ele arredondaria para a conta ter mais precisão.
