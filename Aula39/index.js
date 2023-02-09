const nome = "Leonardo Dognani";

//relembrando for classico

for (let i = 0; i < nome.length; i++) {
  console.log(nome[i]);
}

console.log("___________"); // dividsão

//relembrando for in
for (let n in nome) {
  console.log(nome[n]);
}

console.log("___________"); // divisão

//agora vamos ao for of
for (let valor of nome) {
  console.log(valor);
}
// nesse caso, ele nao ta pegando o indice, mas sim, o valor.

const nomes = ["Leo", "Leh", "Ju", "Dani"];
nomes.forEach(function (valor, indice, array) {
  console.log(valor, indice, array);
});

//no forEach, declaramos a função com os parâmetros sendo valor, índice(posição) e o array completo. Pra cada item do array, ele imprime.
//Mas forEach é uma matéria mais pra frente.

console.log("________________");
//só pra separar

const pessoas = {
  nome: "Roberto",
  sobrenome: "Santos",
};

for (let chaves in pessoas) {
  console.log(chaves, pessoas[chaves]);
}

// for clássico - geralmente com interáveis (arrays ou strings);
// for in - retorna o índice ou chave (string, array ou objeto)
// for of - retorna o valor em si (iteráveis, arrays ou strings)
