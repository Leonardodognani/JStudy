//para importar, usamos 'require()'
const mod1 = require("./mod1");
console.log(mod1.falaNome());
// aqui, importando a outra página, executamos e temos o mesmo resultado da página anterior e ainda executamos a função, que aparece logo em seguida.

//também da pra importar somente a "falaNome()".
//ha formas diferentes de se importar os arquivos

const falaNome1 = require("./mod1").falaNome;
console.log(falaNome1() + " 1");

const falaNome2 = mod1.falaNome;
console.log(falaNome2() + " 2");
// cada forma está importando da mesma forma.

//aqui é via destructuring
const { nome, sobrenome, falaNome } = require("./mod1");
console.log(nome, sobrenome + " 3");
console.log(falaNome() + " 4");

//só podemos importar coisas se elas forem exportadas.

const { Pessoa } = require("./mod1");

const p1 = new Pessoa("Leonardo");
console.log(p1);
