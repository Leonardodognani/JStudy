//              01234567
let umaString = "Um texto";
console.log(umaString[4]); // ele imprime apenas o elemento 4 da sring
console.log(umaString[8]); // como não existe, ele da undefined

console.log(umaString.charAt(6)); // exibe o elmento na posição
console.log(umaString.charAt(9)); // exibe um espaço vazio

console.log(umaString.concat(" em", " um", " lindo dia")); // concatena valores novos após o elemento

console.log(umaString.indexOf("texto"));
//ele mostra em qual posição começa a palavra escolhida

console.log(umaString.indexOf("o", 3));
//ele busca onde está a letra "o", a partir do elemento escolhido, no caso, o 3.

console.log(umaString.lastIndexOf("m", 3));
//aqui ele busca de trás pra frente a letra 'm', a partir do indice 3

console.log(umaString.search(/x/));
//um exemplo de expressões regulares, onde ele procura o elemento pedido, no caso o X

console.log(umaString.replace("Um", "Outro"));
// replace é um método que troca um elemento por outro, no caso o "Um" pelo "Outro".

let umaStringB = "O rato roeu a roupa do rei de roma.";
console.log(umaStringB.replace(/r/, "#"));
// aqui, o comando do método é para substituir apenas a primeira letra por outro elemento, no caso, o 'R' pelo '#'.

console.log(umaStringB.replace(/r/g, "#"));
//Neste segundo, adicionando o 'g' após a seleção do elemento a ser substituído, todos os elementos do grupo são substituídos ao invés de apenas o primeiro.

console.log(umaStringB.length); //este método retorna o tamanho do elemento em caracteres, no caso, 34.

console.log(umaStringB.slice(2, 6)); //slice é um método que "fatia" os elementos escolhidos, declarando as posições entre prênteses, separados por vírgula. No Caso, tudo entre o elemento 2 e o elemento 6 (rato) será exibido.

console.log(umaStringB.slice(-3)); //aqui seria o mesmo de usar o tamanho dos elementos - 3 posições, e exibílos, no caso aqui seria exibido "ma".

console.log(umaStringB.slice(-5, -1)); //também é possível usar slice negativo para se pegar mais facilmente palavras ou elementos no final, no caso, de -5 a -1, contando de trás para frente, sendo o resultado "roma"

console.log(umaStringB.split(" ")); //aqui dividimos a string inteira definida pelos elemntos escolhidos, no caso, aqui usamos "espaço", então ele cria um array com todos os elementos entre espaços.

console.log(umaStringB.split(" ", 3)); //neste caso, fizemos o mesmo que o anterior, poirém, definimos que queremos apenas os 3 primeiros elementos separados por 'espaço'.

console.log(umaStringB.toLocaleUpperCase());
console.log(umaStringB.toLocaleLowerCase());
//o primeiro exibe toda a string em letras maiúsculas e o segunbdo em letras minúsculas.
