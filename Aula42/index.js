const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let numero of numeros) {
  if (numero === 2 || numero === 5) {
    console.log("pulei o numero");
    continue; // aqui faz com que o codigo continue pulando para a próxima interação. No caso, não irá ser impresso.
  }

  console.log(numero);
}

console.log("______________"); //pra separar

for (let numero of numeros) {
  if (numero === 7) {
    console.log("acabou antes do 7!");
    break; // aqui fazemos com que o bloco pare o laço assim que nossa condição for suprida. a engine do JS não executa mais o laço.
  }

  console.log(numero);
}
