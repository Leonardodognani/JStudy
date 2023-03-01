//Funções geradoras
function* geradora1() {
  //código qlqr...
  yield "Valor 1";
  //código qlqr...
  yield "Valor 2";
  //código qlqr...
  yield "Valor 3";
}

const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
// cada vez que ser chamado, ele uiurá para o próximo 'yield'
console.log(g1.next());

function* geradora2() {
  //código qlqr...
  yield "Valor 1";
  //código qlqr...
  yield "Valor 2";
  //código qlqr...
  yield "Valor 3";
}

const g2 = geradora2();
for (let valor of g2) {
  console.log(valor);
}
//neste caso o for irá fazer a função geradora2 imprimir os 3 valores de yield.

function* geradora3() {
  let i = 0;
  while (true) {
    yield i;
    i++;
  }
}

const g3 = geradora3();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

//pra cada vez que eu chamo a função, ela gera mais um resultado de acordo com o código. Se eu paro de chamar, ele para no ultimo numero chamado. Se eu adicionar mais um console.log, neste caso, ele avança e gera o próximo numero.

console.log("____________________________"); // para separar as impressões
function* geradora4() {
  yield 0;
  yield 1;
  yield 2;
}

function* geradora5() {
  yield* geradora4();
  yield 3;
  yield 4;
  yield 5;
}

const g5 = geradora5();
for (let valor of g5) {
  console.log(valor);
}

//acima é um exemplo de como podemos 'delegar' parte de uma função geradora para outra. No caso, a 'geradora4()' faz o 0, 1 e 2. Então a chamamos dentro da 'geradora5()' e contionuamos de onde ela parou e o processo de gerar e de impressão será de todos os elementos na ordem, sendo 0, 1, 2, 3, 4 e 5.

function* geradora6() {
  yield function () {
    console.log("Vim do Y1");
  };

  /*
  return function () {
    console.log("Vim do return");
  };
  */
  // mais código...

  yield function () {
    console.log("Vim do Y2");
  };
}

const g6 = geradora6();
const func1 = g6.next().value;
const func2 = g6.next().value;

func1();
func2();

//acima podemos ver que é possível usar yield com valores e códigos diferentes, podendo até usá-los como uma função. Essas funções serão geradas quando forem chamadas da mesma forma que as anteriores. No caso, atribuímos constantes para cada uma e as chamamos. Todas são geradas na ordem.

//se adicionarmos um comentário no meio da função, ela para de gerar e não é lido mais nada abaixo do return, como numa função comum.
