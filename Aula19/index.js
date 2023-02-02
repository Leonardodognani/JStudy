const array = [1, 2, 3];

// posso alterar os valores, mas não posso reatribuir o valor da variável array.

array.push(4);
array[0] = "Leo";

console.log(array);
//tudo acima pode ser feito, pois estou alterando os valores dentro do array.

//   array = "outra coisa";
//isso não pode ser feito, pois então estaria alterando o valor da variável 'array' e um 'const', uma constante, não pode ter seu valor redefinido, portanto, daria erro.
// Caso fosse um "let", isso seria possível, pois 'let' pode ser redefinido.

const nome01 = "Leo";
const sobrenome01 = "Dognani";
const idade01 = 37;

const nome02 = "Leh";
const sobrenome02 = "Barros";
const idade02 = 26;

// no caso acima, caso precise criar uma lista de pessoas com dados como nome, sobrenome e idade, ficaria muito grande e inviável. Então ha formas mais fáceis e organizada de criar:
//OBS: colchetes "[]" é um array e chaves "{}" é um objeto. No caso, abaixo, criaremos um objeto.
const pessoa1 = {
  nome: "Leo",
  sobrenome: "Dognani",
  idade: 37,
};
const pessoa2 = {
  nome: "Leh",
  sobrenome: "Barros",
  idade: 26,
};

//agora, 'pessoa1' é um objeto com vários atributos.

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

// Abaixo vbamos ver como escrever uma função para criar uma "pessoa" com os atributos:

// Basta criar a função e por os atributos nos parâmetros (nome, sobrenome e idade). Dentro do return, criamos um objeto, como acima, mas definimos que 'nome:' será igual a 'nome'.

function criaPessoa(nome, sobrenome, idade) {
  return { nome: nome, sobrenome: sobrenome, idade: idade };
}

const pessoa01 = criaPessoa("Leonardo", "Dognani", 37);
const pessoa02 = criaPessoa("Leticia", "Barros", 26);
const pessoa03 = criaPessoa("Lara", "Almeida", 30);
const pessoa04 = criaPessoa("Dani", "Silva", 20);
const pessoa05 = criaPessoa("Gertrudes", "conceicao", 57);

console.log(
  pessoa01.nome,
  pessoa02.nome,
  pessoa04.sobrenome,
  pessoa05.idade,
  pessoa03.sobrenome
);

// Aqui, criamos uma lista de pessoas, usando os argumentos do qual desejamos, 'Leonardo' e etc. A função chamamos de 'factory', pq ela cria um objeto.
//Quando chamamos a pessoa01 ou outra, usamos ponto "." para chamar o atributo desejado, no caso, nome.
//note que usamos uma função para criar várias pessoas usando os mesmos parâmetros, aceitando argumentos diferentes.

const pessoa = {
  nome: "Leo",
  sobrenome: "Dognani",
  idade: 37,

  fala() {
    console.log("Olá, eu sou o Leo");
  },
};

pessoa.fala();

//acima temos um bloco com uma "ação" de 'falar()'. Depois pedimos para a constante 'pessoa' executar a 'fala()', e funciona.

const pessoaA = {
  nome: "Leonardo",
  sobrenome: "Dognani",
  idade: 37,

  fala() {
    console.log(
      `${this.nome} ${this.sobrenome} possui idade atual de ${this.idade} anos.`
    );
  },

  incrementaIdade() {
    this.idade++;
  },
};

pessoaA.fala(); // aqui ele executa os dados.
pessoaA.incrementaIdade(); //aqui ele aumenta idade.
pessoaA.fala(); //aqui ele já vem após o incremento da idade, no caso com +1.

//acima, usamos a palavra "this", que se refere ao objeto 'pessoaA', seguido por ponto "." para identificar o atributo do objeto o qual se deseja exibir.
//Também criamos outro método (como 'fala()').
// Neste caso, sempre que chamar o método/ação 'incrementaIDade', ela irá incrementar a idade.
