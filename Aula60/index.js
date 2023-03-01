//Função construtora -> constrói objetos
//Função fabrica -> fabrica objetos
//Construtora -> Pessoa (new) (começa com maiúscula)

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ", sou um método");
  };
}

const p1 = new Pessoa("Leo", "Dognani");
const p2 = new Pessoa("Leonardo", "Wolf");
p2.metodo();

//função construtora sempre precisa da palavra 'new' antes de chamar o função. O nome começa mauiúsculo por convenção.

function Pessoa2(nome, sobrenome) {
  const ID = 123456;
  // atributos privados, pois não estão disponíveis fora da função.
  const metodoInterno = function () {};

  //atributos ou métodos públicos, porque podem ser acessados fora da função.
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = () => {
    console.log(this.nome + ", sou um método");
  };
}

const p3 = new Pessoa("Leo2", "Dognani2");
const p4 = new Pessoa("Leonardo2", "Wolf2");
p3.metodo();
