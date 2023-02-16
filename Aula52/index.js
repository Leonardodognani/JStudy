function funcao() {
  //parâmetros vazios
  console.log("Oie");
}
funcao("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// ele não imprime os argumentos dados.

function funcao2() {
  console.log(arguments);
}
funcao2("Valor", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// aqui ele já imprime os argumentos com seus respectivos índices
// inclusive, podemos definir e mexer com os argumentosa e seus índices, como no exemplo abaixo:

//argumentos que sustentam todos os argumentos enviados.
//preencher os parâmetros não faria diferença neste caso.
function funcao3() {
  let total = 0;
  for (let argumento of arguments) {
    total += argumento;
  }
  console.log(total);
}
funcao3(1, 2, 3, 4, 5, 6, 7);

//em outro exemplo, vamos usar parametros
function funcao4(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
}
funcao4(1, 2, 3);
//o JS cria as variaveis da mesma forma, mesmo sem valor, imprimindo 'undefined' para cada parametro sem argumento ou argumento sem parametro.

function funcao4(a, b = 2, c = 4) {
  //aqui já definimos um valor padrão, caso não seja atribuído quando chamar a função.
  // b = b || 0; forma mais antiga
  console.log(a + b + c);
}
funcao4(2, undefined, 20);
//unica forma que temos de fazer o parametro ficar com o valor original declarado, é declarar nos argumentos 'undefined'. Dessa forma ele vai assumir seu valor original.

//outro exemplo. Mesmo se tratando de objeto e array, ambos funcionam da mesma forma
function funcao5({ nome, sobrenome, idade }) {
  console.log(nome, sobrenome, idade);
}
funcao5({ nome: "Leo", sobrenome: "Dognani", idade: 37 });

function funcao6([valor1, valor2, valor3]) {
  console.log(valor1, valor2, valor3);
}
funcao6(["Leo", "Dognani", 37]);

// também podemos usar o 'rest operator' no parâmetro, a fim de que todo o resto de argumentos após o último parâmetro receber seu valor, vá para o parâmetro com 'rest'.
function conta(operador, acumulador, ...numeros) {
  console.log(operador, acumulador, numeros);
}
conta("+", 0, 20, 30, 40, 50);

//assim podemos ir além:
function conta2(operador, acumulador, ...numeros) {
  for (let numero of numeros) {
    if (operador === "+") acumulador += numero;
    if (operador === "-") acumulador -= numero;
    if (operador === "/") acumulador /= numero;
    if (operador === "*") acumulador *= numero;
  }
  console.log(acumulador);
}
conta2("+", 1, 20, 30, 40, 50);
//rest operator sempre deve ser o último a ser declarado.
