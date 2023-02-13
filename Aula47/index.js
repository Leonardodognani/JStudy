/*
try {
  // executada quando não ha erros
} catch (e) {
  // executada quando ha erros
} finally {
  // executado sempre. Geralmente omitimos o 'finally', nesses casos, utilizamos apenas try catch.
}
*/

try {
  console.log(a);
  console.log("Abri um arquivo");
  console.log("Manipulei um arquivo e gerou erro"); // aqui ele iria direto pro catch, pois seria "pego" o erro.
  console.log("Fechei o arquivo");
} catch (e) {
  console.log("Tratando o erro");
} finally {
  console.log("FINNALY: Eu sempre sou executado"); //sempre é executado, dando ou não o erro.
}

console.log("________________________"); // separar

//também, é possível ter blovos de try, catch e finally um dentro do outro:

try {
  console.log("Abri um arquivo");
  console.log("Manipulei um arquivo"); // aqui ele iria direto pro catch, pois seria "pego" o erro.
  console.log("Fechei o arquivo");

  try {
    console.log(b);
  } catch (e) {
    console.log("Deu erro");
  } finally {
    console.log("eu tb sou finally dentro de outro bloco");
  }
} catch (e) {
  console.log("Tratando o erro");
} finally {
  console.log("FINNALY: Eu sempre sou executado"); //sempre é executado, dando ou não o erro.
}

//nesse acima, vemos que os blocos são executados até pegar algum erro e jogar para o catch. Porém, no caso de ambos os 'finally', os dois são executados, mas não todos os erros, apenas o primeiro que é pego.

console.log("__________________________"); //separar

function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    // se for diferente de uma data
    throw new TypeError("Esperando instância de Date");
  }

  if (!data) {
    data = new Date();
  }
  return data.toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
}

try {
  const data = new Date("01-01-1970 12:58:12");
  const hora = retornaHora();
  console.log(hora);
} catch (e) {
  // tratar erro
  // catch(e)
} finally {
  console.log("Tenha um bom dia");
}
