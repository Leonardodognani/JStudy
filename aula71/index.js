// o forEach está apenas disponivel dentro de arrays

const a1 = [10, 20, 30];

/*
for (let valor of a1) {
  console.log(valor);
}
*/

let total = 0;
a1.forEach((valor) => {
  total += valor;
});
console.log(total);
// o forEach só vai fazer iteração no array.
// não é recomendado while e do while, pq são recomendados pra quando não sabemos quantas inerações teremos.
