const nome = ["Leo", "Roberto", "Maria", "Leh", "Julia"];
console.log(nome);
nome[2] = "Pedro";
console.log(nome);
delete nome[2];
console.log(nome);

const novo = nome;
novo.pop();
console.log(nome);
//lembramos que no exemplo acima, não criamos uma cópia, mas sim, apontamos pra memória e ambos são alterados em caso de qlqr um sofrer alterações.

//além da forma literal de criar arrays, temos a forma abaixo:
const nomes = new Array("João", "Lucas", "Dani");
console.log(nomes);

//devemos lembrar que também podemos criar uma cópia, usando o spread:
const novo2 = [...nomes];
novo2.pop();
console.log(nomes);
console.log(novo2);

const removido = nomes.shift();
console.log(nomes);
console.log(removido);
nomes.unshift("João");
console.log(nomes);
//revisando alguns métodos de array, como pop(), que tira do final, e push() que add no final; e shift() que retira no inicio e unshift() que recoloca no inicio.

const nome1 = "Leonardo Wolf Dognani";
const nomes1 = nome1.split(" ");
console.log(nomes1);
//aqui criamos um array a partir de uma string

const nomes2 = nomes1.join(" ");
console.log(nomes2);
//e aqui o array volta a ser uma string
