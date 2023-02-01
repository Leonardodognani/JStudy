let num1 = 9.54578;
let num2 = Math.floor(num1); //aqui esse método de Math, arredonda para baixo.
console.log(num2);

let num3 = Math.ceil(num1); // Aqui ele arredonda para cima.
console.log(num3);

let num4 = Math.round(num1);
//aqui ele arredonda para o mais próximo.
console.log(num4);

console.log(Math.max(1, 2, 3, 4, 5, -10, 1500, 9, 8, 7, 6));
// esse método de Math pega o maior da sequencia

console.log(Math.min(1, 2, 3, 44, 99, 2000, 12, 345));
//Neste ele pega o menor da sequencia.

console.log(Math.random());
//aqui ele cria um numero aleatório de 0 a 0.9999...

const aleatorio = Math.round(Math.random() * (10 - 5)) + 5;
console.log(aleatorio); // sairá sempre um número de 5 a 10, arredondado pelo .round

console.log(Math.PI); // exibe o valor de PI

console.log(Math.pow(2, 10)); // mostra 2 elevado a 10º potência;
console.log(2 ** 10); //muito mais fácil usar desta forma do que a acima.

let nume1 = 9;
console.log(nume1 ** 0.5);
// assim conseguimos ver qual a raiz quadrada dos números. Também podemos susar "(1/2)" ao invés de 0.5, mas não ha necessidade.

console.log(100 / 0); // em JavaScript é possível dividir numeros por 0. No caso ele exibe o resultado de "Infinity".
