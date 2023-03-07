function rand(min, max) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo) {
  return new Promise((resolve, reject) => {
    // construtor da Prosmise.
    if (typeof msg !== "string") {
      reject(false);
      return;
    }
    setTimeout(() => {
      resolve(msg);
    }, tempo);
  });
}

//vamos ver alguns exemplos de métodos de Promises
// Promise.all, Promise.race, Promise.resolve, Promise.reject

const promises = [
  // "Primeiro valor",
  esperaAi("Promise 1", 3000),
  esperaAi("Promise 2", 500),
  esperaAi("Promise 3", 1000),
  // esperaAi(1000, 1000),

  // "Outro valor",
];

// Promise.all
/*
Promise.all(promises) // resolve todas juntas. Se uma der erro, todas dão.
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });
*/

// Promise.race
/*
Promise.race(promises) // ele entrega a primeira que resolver.
  .then(function (valor) {
    console.log(valor);
  })
  .catch(function (erro) {
    console.log(erro);
  });
*/
function baixaPagina() {
  const emCache = true;

  if (emCache) {
    return Promise.resolve("Página em cache");
  } else {
    return esperaAi("Baixei a página", 3000);
  }
}

baixaPagina()
  .then((dadosPagina) => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));

// no resolve e no reject, ele já entrega uma promessa resolvida ou rejeitada, no caso de um IF (como no exemplo acima).
