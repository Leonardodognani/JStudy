/*
Escreva uma função que recebe um numero e retorne o seguinte:
Número é divisível por 3 = Fizz
Número é divisível por 5 = Buzz
Número é divisível por 3 e 5 = FizzBuzz
Número NÃO é divisível por 3 e 5 = Retorna o próprio número
Checar se o número é realmente um número
Use a função com números de 0 a 100
*/

//minha conclusão:
const numero = (num1) => {
  if (typeof num1 === "number") {
    console.log(num1);
  } else {
    return console.log("Número inválido. Por favor, digite um número");
  }
  if (num1 % 3 === 0 && num1 % 5 === 0) return console.log("FizzBuzz");
  if (num1 % 5 === 0) return console.log("Buzz");
  if (num1 % 3 === 0) return console.log("Fizz");
};

for (let i = 0; i <= 100; i++) {
  numero(i);
}

console.log("______________________________");

//conclusão do professor:
function fizzBuzz(numero) {
  if (typeof numero !== "number") return numero;
  if (numero % 3 === 0 && numero % 5 === 0) return "FizzBuzz";
  if (numero % 5 === 0) return "Buzz";
  if (numero % 3 === 0) return "Fizz";
  return numero;
}

for (let i = 0; i <= 100; i++) {
  console.log(i, fizzBuzz(i));
}
