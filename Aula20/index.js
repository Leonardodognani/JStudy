/*
já vimos em aulas anteriores sobre os tipos Primitivos (imutáveis):
* string
* number
* boolean
* undefined
* null
e tem mais dois que não vimos, mas fazem parte da lista:
* bigint
* symbol
*/

let a = "A";
let b = a;
console.log(b); // aqui, b é igaul a a ('A').

a = "outra coisa";
console.log(a, b); //aqui, b e a são independentes e não apontam pro mesmo valor na memória, apenas é criada uma cópia de a quando atribuímos b. Mas apenas no momento da cópia. Alterações posteriores no 'original' não alteram as cópias. Portanto, são imutáveis.

/*
Referência (mutável) - array, object, function
*/
let A = [1, 2, 3];
let B = A;
console.log(A, B);
//aqui fazemops o mesmo processo, mas não é criado uma cópia, e sim, B agora aponta para o mesmo local em que o array está gravado na memória.

A.push(4);
console.log(A, B);
// aqui adicionamos o numero 4 no array e ambos imprimem a mesma informações.

B.pop();
console.log(A, B);
//aqui alteramos em B e tanto A quanto B alteram o array.

//Isso ocorre porque ambos apontam para o mesmo lugar na memória e ambos fazem alterações, portanto, são mutáveis.

// ha como fazer uma cópia do Array, caso seja necessário, e isso faz co0m que não se aponte pro mesmo lugar da memória mais.

//por exemplo:
let C = [...B];
C.push(5);
console.log(A, B, C);

//neste caso, copiamos os valores de B para um array em C. Após, alteramos C e vendo no console, apenas C foi alterado, diferente do que ocorre com A e B, que apontam para o mesmo lugar na memória.

//podemos fazer a mesma coisa com objetos:

const pessoa = {
  nome: "Leo",
  idade: 37,
};

const alguém = pessoa;

pessoa.nome = "Leonardo";
console.log(alguém);
console.log(pessoa);

//É possível alterar os valores de objetos e devemos lembrar que ambos apontam para o mesmo liugar na memória, ou seja, neste caso, alterando um, alteramos todos que apontam para o mesmo local.

//também podemos frazer uma cópia,m da mesma forma que fizemos no array:
console.log("_____________________");
//só para imprimir uma divisória no output
const pessoa2 = {
  nome: "Leo",
  idade: 37,
};

const alguem2 = { ...pessoa2 };

pessoa2.nome = "Leonardo";
pessoa2.idade = 38;
console.log(pessoa2);
console.log(alguem2);

//novamente, desta forma, quando fazemos uma cópia, depois de copiado a informação do objeto, podemos alterar o original e a cópia permanece com as mesmas informações de quando foi copiada, desvinculando a cópia da memória.

//os primitivos são apenas copiados, portanto, são imutáveis.

//os de referência costumam apontar para o mesmo lugar na memória e todos que apontam para ele, o "referenciam" e mudam juntos. Portanto, são mutáveis.
