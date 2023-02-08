//relembrando:

let a = "A";
let b = "B";
let c = "C";

[a, b, c] = [1, 2, 3]; // atribuição via desestruturização. Aqui a gente modifica os valores dos elementos.

console.log(a, b, c);

const letras = [3, 4, 5];
[d, e, f] = letras;
console.log(d, e, f);

//então:

//índice         0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const primeiroNumero = numeros[0];
console.log(primeiroNumero); // imprime 1
// se fossemos repetir o processo, precisariam ser criadas manualmente 9 vriáveis.

const [primeiro, segundo] = numeros; //aqui ele atribui na ordem do index os elementos a variaveis.
console.log(primeiro, segundo); // aqui ele imprime 1 e 2;

const [um, dois, tres, ...resto] = numeros; //aqui ele pega o restante não declarado e põe na variavel 'resto'.
console.log(resto); // então ele exibe todos os restantes não declarados acima, dentro da array.

// ...rest, ...spread

const elementos = ["g", "h", "i", "j", "k", "l", "m", "n"];
const [primeira, , terceira, , quinta, , setima] = elementos;
console.log(primeira, terceira, quinta);
//como acima, podemos também pular elementos enquanto os declaramos, inserindo espaços vazios. E podemos imprimir apenas os desejados tb.

//          0                       1                           2
//  0      1      2         0       1       2          0       1      2
const valores = [
  ["maca", "pera", "banana"],
  ["abacate", "mamao", "abacaxi"],
  ["pessego", "limao", "melao"],
];
// cada array tem seu indice (0, 1, 2) e pra acessar dentro do array, os elementos tb possuem índice. Logo, acessar (valores[2][0]) iria selecionar o ultimo array[indice 2] e o elemento [1], limão.
console.log(valores[2][1]); //aqui exibe o último grupo[posição 2] e o elemento 'limão'[posição 1], no caso, [2][1] de 'valores'.

//é possível pular tb os índices e selecionar o que desejar. Também fazer a mesma desestruturização como fizemos anteriormente.

const [lista1, lista2, lista3] = valores;
console.log(lista3); // aqui imprime todos os elementos da terceira lista
