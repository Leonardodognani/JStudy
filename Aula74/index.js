// Async / Await;
function rand(min, max) {
  min = 1000;
  max = 3000;
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
      resolve(msg.toLocaleUpperCase() + " - Passei na promise");
    }, tempo);
  });
}

/*
esperaAi("Fase 1", rand())
  .then((valor) => {
    console.log(valor);
    return esperaAi("Fase 2", rand());
  })
  .then((fase) => {
    console.log(fase);
    return esperaAi("Fase 3", rand());
  })
  .then((fase) => {
    console.log(fase);
  })
  .catch((e) => console.log(e));
*/

// mesmo melhorando a parte de callback hell, ainda assim é verboso. Então para deixar o código mais limpo, usamos Asyn e Await.
//Elas permitem que possamos utilizar promises dentro do corpo da função, como se essas promises fossem síncronas. COmo se fossem os "then()".

async function executa() {
  try {
    const fase1 = await esperaAi("Fase 1", rand());
    console.log(fase1);
    const fase2 = await esperaAi("Fase 2", rand());
    console.log(fase2);
    const fase3 = await esperaAi("Fase 3", rand());
    console.log(fase3);
    console.log("Terminamos na fase:", fase3);
  } catch (e) {
    console.log("ERRO NO PROCESSAMENTO", e);
  }
}
executa();

//assim o código faz a mesma coisa, mas muito menor e mais fácil.
//Além disso, pra tratar erros, podemos englobar o código num try catch, o que o torna mais simples e organizado.

/* as promises tem 3 estados
- Pending/pendente: a que está sendo executada e não retornou o valor. Se declaramos a promise e não usamos 'then' ou 'catch', ela fica pendente e não retorna o valor.
- Fullfilled/resolvida:  quando ela está resolvida
- Reject/rejeitada: quando ela é rejeitada
*/
