// Arrays não são indexados pelos caracteres, como a string, e sim, são indexados pelos seus elementos.
//                0        1       2
const alunos = ["Luiz", "Maria", "Leo"];
console.log(alunos[0]);
console.log(alunos[2]);
console.log(alunos[1]);
// da pra acessar o elemento selecionando a string e entre colchetes "[]" o index que se deseja exibir ou acessar.

alunos[0] = "Eduardo";
console.log(alunos); //isso substitui o elemento no index desejado

alunos[3] = "Luiza";
console.log(alunos); // também pode-se adicionar um novo índice no array.
//porém, como acima, deve-se saber o tamanho do array.

console.log(alunos.length); // assim como a string, pode-se usar métodos, como acima pra se mostrar o tamanho do array.

alunos[alunos.length] = "Luiz";
alunos[alunos.length] = "Dani";
alunos[alunos.length] = "Luana"; // a cada nome adicionado, será colocado um novo elemento no array.

console.log(alunos);

// também pode-se usar o outro método, mais simples:

alunos.push("Thiago");
alunos.push("Ana"); // assim, é adicionado ao fim do array os novos elementos.
console.log(alunos);

alunos.unshift("Pedro"); // o unshift adiciona primeiro, no índice 0, fazendo com que todos os elementos do array mudem de índice, um para frente pra cada elemento adicionado desta forma.
console.log(alunos);

alunos.pop(); // com 'pop', nós retiramos o último elemento do array.
console.log(alunos);

const removidos = alunos.pop(); // também é possível salvar os elementos removidos numa variável
console.log(alunos);
console.log(removidos);

alunos.push("Ana");
console.log(alunos);

const removidos2 = alunos.shift(); // o shift remove o primeiro elemento do array. No caso, foi salvo em outra variável.
console.log(alunos);
console.log(removidos2, removidos);

// cada vez que alteramos os elmentos de um array, também alteramos o seu índice.

delete alunos[3]; // este comando deleta um elemento, mas não altera o índice, ficando como 'empty item', 'item vazio'.
console.log(alunos[3]); // se tentarmos acessar, dará como "undefined".

console.log(alunos[70]); //se tentarmos acessar um índice inexistente, o JS sempre retornará 'undefined'.

console.log(alunos.slice(0, -4));
//também podem ser utilizados métodos como slice(), mas ao invés de caracteres, ele "fatia" os elementos do array.

console.log(typeof alunos);
// aqui ele não retorna array, mas sim, "objeto".
console.log(alunos instanceof Array); // assim é possível verificar se é um array.

//uma boa prática é dar prweferencia pra push, pois assim só é alterado o final do array ao invés de usar unshift, que faz com que todos os elementos mudem de índice.

//Observação: const pode ser alterada quando não mudamos a constante em si, mas sim o valor atribuído ao objeto, como os elementos de um array, como mostrado acima.
//O que não pode ser feito é mudar a variável em si, pois constantes (const) não podem ser alteradas.
