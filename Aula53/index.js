//return - retorna um valor e a função termina

function soma(a, b) {
  return a + b;
}

function soma2(a, b) {
  console.log(a + b);
}
soma2(5, 2);

function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
  };
}

const p1 = criaPessoa("Leo", "Dognani");
const p2 = {
  nome: "João",
  sobrenome: "Santos",
};

console.log(typeof p1);
console.log(typeof p2);
console.log(p1);
console.log(p2);

console.log("__________________");
//tanto p1 quanto p2 são a mesma coisa, escritas de formas diferentes.
//no caso do p1, o JS já entende que são os parâmetros, como se estivesse escrito como o de cima.

function falaFrase(comeco) {
  function falaResto(resto) {
    return comeco + " " + resto;
  }

  return falaResto;
}

const olaMundo = falaFrase("Olá");
console.log(olaMundo("mundo"));

//aqui o 'olaMundo' chama a função 'falaFrase' e define o parâmetero da funcao falaFrase como 'olá'. A função falaFrase retorna a função 'falaResto', que por sua vez retorna o 'comeco'(parâmetro de falaFrase - 'olá' + 'espaço' + resto - parâmetero 'mundo').
console.log("__________________");

//outro exemplo, com o mesmo resultado
function falaFrase2(comeco) {
  function falaResto2(resto) {
    return comeco + " " + resto;
  }

  return falaResto2;
}

const fala = falaFrase("Olá");
const resto = fala("mundo!");
console.log(resto);

console.log("__________________");

//um código desse tipo com mais aplicação:
function duplica(n) {
  return n * 2;
}

function triplica(n) {
  return n * 3;
}

function quadruplica(n) {
  return n * 4;
}

console.log(duplica(2));
console.log(triplica(2));
console.log(quadruplica(2));

console.log("__________________");
//aqui as funções estão repetidas. No caso, daria pra gente evitar:

function criaMultiplicador(multiplicador) {
  return function (n) {
    return n * multiplicador;
  };
}

const duplica2 = criaMultiplicador(2);
const triplica2 = criaMultiplicador(3);
const quadriplica2 = criaMultiplicador(4);

console.log(duplica2(3));
console.log(triplica2(3));
console.log(quadriplica2(10));
