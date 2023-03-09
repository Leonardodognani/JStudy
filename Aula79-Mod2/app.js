/*
const multiplicacao = require("./mod");
console.log(multiplicacao(2, 3));
*/
//podemos importar a função e executar aqui no app.

/*
const aaaa = require("./B/C/D/mod");
const cachorrinho = new aaaa("Dog");
cachorrinho.latir();
*/

/*
const Cachorro = require("./Z/mod2");
const c1 = new Cachorro("Dog");
c1.latir();
*/

//coisas novas para mostrar o caminho das pastas
/*
console.log(__filename);
console.log(__dirname);
*/
const path = require("path");
console.log(path.resolve(__dirname, "..", ".."));
//dessa forma, é possível voltar em pastas com '..' e avançar em pastas com '.'.

const Cachorro = require("./Z/mod2.js"); //normalmente não faz diferença usar ou não a extensão 'js'. A não ser que não seja um 'js'.
const c1 = new Cachorro("Dogão");
c1.latir();
