//Retorne a soma do dobro de todos os pares
// -> Filtras pares
// -> Dobrar valores
// -> Reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosPares = numeros.filter((valor) => {
  return valor % 2 === 0;
});
console.log(numerosPares);

const paresDobrados = numerosPares.map((valor) => valor * 2);
console.log(paresDobrados);

const paresDobradosSomados = paresDobrados.reduce(function (acumulador, valor) {
  return acumulador + valor;
});
console.log(paresDobradosSomados);

//da forma acima foi minha solução. O professor exibe um código bem menor, único, como vou colocar abaixo.

const numeros2 = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const numerosPares2 = numeros2
  .filter((valor) => valor % 2 === 0)
  .map((valor) => valor * 2)
  .reduce((ac, valor) => ac + valor);
