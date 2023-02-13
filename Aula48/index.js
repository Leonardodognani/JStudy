function mostraHora() {
  let data = new Date();

  return data.toLocaleTimeString("pt-BR", {
    hour12: false,
  });
}

// setInterval(); // 'setInterval' executa automaticamente um intervalo de tempo para que alguma função seja executada em um dado momento.

console.log(mostraHora());
/*
function funcaoDoInterval() {
  console.log(mostraHora());
}
*/

//   setInterval(funcaoDoInterval, 1000);
// no caso, estou definindo o intervalo de 1000 milisegundos, ou seja, 1000 milésimos de 1 segundo, que é igual a 1 segundo. Ou seja, a cada 1 segundo, minha função é executada. Neste caso, o relógio estaria sendo atualizado na saída dos dados.
// (para teste, é só tirar o comentário e executar)

//a função pode ser feita tb direto dentro do setInterval:

/*
setInterval(function () {
  console.log(mostraHora());
}, 1000);
*/

// podemos jogar o setInterval numa variável tb:
const timer = setInterval(function () {
  console.log(mostraHora());
}, 1000);

//com setTimeout, eu consigo colocar uma duração para as execuções do setInterval e como parâmetro da função anônima dentro dele, posso usar o 'clearInterval' e chamar a const 'timer' que recebe a função do intervalo acima. E defino, do mesmo jeito que defino o setInterval, o numero de 'milisegundos' que desejo como limite para parar a exucução. No caso abaixo, depois de 5 segundos (5000 milisegundos), o código pára de executar.
setTimeout(function () {
  clearInterval(timer);
}, 5000);

//também podemos usar o setTimeOut para executar um bloco com tempo predeterminado. No caso abaixo, ele executará depois de 7 segundos, 2 segundos a mais depois de exibido a última hora acima.
setTimeout(function () {
  console.log("Olá mundo!");
}, 7000);
