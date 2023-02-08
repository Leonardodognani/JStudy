//a ideia é a mesma da aula anterior, sdó que com objetos.
//Vamos ao exempo:

const pessoa = {
  nome: "Leo",
  sobrenome: "Dognani",
  idade: 37,
  endereco: {
    // um objeto dentro do outro é comum em JS
    rua: "av brasil",
    numero: 999,
    bairro: "centro",
    pais: "brasil",
  },
};

//console.log(pessoa.nome, pessoa.sobrenome);
//como qlqr objeto, podemos selecionar as propriedades da variavel seguido de '.', seja gravando numa variavel ou não.

//Atribuição via desestruturização
//const { nome, sobrenome, idade } = pessoa; // aqui ele extrai desse objeto os atributos selecionados e atribui a uma constante.
//console.log(nome, sobrenome);

//também é possível modificar e atribuit um novo valor ao atributo entrte chaves:

//const { nome: teste = "" } = pessoa; //aqui atribuímos a string 'teste' o valor do "nome:" lá do objeto, ou seja, teste = 'Leo'.
//console.log(teste); //imprime o valor de "nome:" do objeto.

/*
const {
  endereco: { rua: r = 12345, numero },
  endereco,
} = pessoa;
console.log(r, numero, endereco); // aqui extraímos apenas a rua e o numero de dentro de um objeto (endereco) que está dentro de outro objeto (pessoa); Então é impresso também o endereço completo logo depois.
*/

const { nome, ...resto } = pessoa;
console.log(resto); // somente o nome foi separado, o 'resto' inteiro é impresso, de ambos os objetos.
