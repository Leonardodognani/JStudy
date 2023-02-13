/*
try {
  console.log(naoExisto);
} catch (err) {
  console.log("naoExisto não existe.");
  console.log(err);
}
*/

//acima é apenas um exemplo. NUNCA devemos exibir o erro dessa forma e NUNCA devemos revelar atributos internos do programa para o usuário. Tanto pelo usuário não entender quanto pelo potencial perigo de segurança em exibir partes internas do programa. O ideial é tratar o erro de outras formas.

function soma(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw new Error("x e y precisam ser números");
    // podemos usar somente 'throw'. 'Error', 'TypeError', 'ReferenceError' são construtores do próprio JS.
  }

  return x + y;
}

try {
  // console.log(soma(1, 2)); // aqui será executado normalmente.
  console.log(soma("1", 2)); // aqui ele irá exibir o erro.
} catch (error) {
  console.log(error);
  //como acima, não é interessante exibir essa informação, a não ser para o backend, mas é outra situação.
  //console.log("Alguma coisa mais amigável para o usuário");
}
