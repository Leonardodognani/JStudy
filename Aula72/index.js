// Promises

function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    // construtor da Prosmise.
    if (typeof msg !== "string") reject("BAD VALUE");
    setTimeout(() => {
      resolve(msg); //resolve já resolve a promise após o bloco ser executado.
    }, tempo);
  });
}

//no caso, não sabemos a ordem em que seria executada se chamassemos varias vezes. Antes, usaríamos um 'callback hell', chamando uma função dentro da outra. Mas em códigos muito maiores, ficaria uma árvore muito extensa. Por isso utilizamos Promise.
//normalmente usamos arrow function em promise.

esperaAi("Conexão com o BD", rand(1, 3))
  .then((resposta) => {
    console.log(resposta);
    return esperaAi("Buscando dados da BASE", rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
    return esperaAi(22, rand(1, 3));
  })
  .then((resposta) => {
    console.log(resposta);
  })
  .then(() => {
    console.log("Exibe dados na tela");
  })
  .catch((e) => {
    console.log("ERRO", e);
  });

console.log("Isto será exibido antes das promises");
//JS vai executar as promises depois dos outros. As promiss são em paralelo. Ele joga as promises pra executarem depois. Por isso é assíncrono.
