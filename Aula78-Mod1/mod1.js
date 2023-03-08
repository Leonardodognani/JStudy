const nome = "Leo";
const sobrenome = "Dognani";

const falaNome = () => nome + " " + sobrenome;
//abaixo é uma ferramenta para exportação das variáveis e da função pelo module do node.
/*
module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
console.log(module.exports);
*/

exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = "O que eu quiser exportar";
//aqui, usamos this com aquio que queremos exportar.

//aqui, é a mesma utilidade do exemplo acima.

//podemos tb mudar o nome da variável na exportação, pois o que ralmente exportamos, é o seu valor.
//ex:
exports.PESSOA = nome;
console.log(exports);

//caso não seja desejavel exportar itens, podemos criar exports somente para o que será exportado. Outros arquivos, caso não desejemos que sejam importados de outros páginas, podemos manter somente para nossa página sem exportá-las.

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }
}

exports.Pessoa = Pessoa;
