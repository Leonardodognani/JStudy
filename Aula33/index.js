let nome = "Leo";
var nome2 = "Leonardo";

//let nome = 'Leo' // não se pode renomear uma variavel.
var nome2 = "Dani"; // aqui, com var, pode-se redeclarar.

const verdadeira = true;

if (verdadeira) {
  let nome = "Otavio";
  let nome2 = "Thiago"; // aqui não estamos declarando a mesma variável 'nome', estamos criando outra variável 'nome'. Fora do escopo os valores continuam os mesmos.
  console.log(nome, nome2);

  if (verdadeira) {
    let nome = "outra coisa";
    console.log("OK");
    console.log(nome); // aqui, como está dentro de outro bloco, mesmo que dentro de outro, ele cria novamente, mas apenas dentro do bloco.
  }
}
console.log(nome, nome2); // percebe-se que fora do escopo, as variáveis 'nome' e 'nome2' mantem o mesmo valor.
// acima podemos criar outro let com o mesmo nome de variável se usarmos dentro de um escopo, um bloco {...bloco}. Let tem escopo de bloco. Dentro de um bloco é possível criar outro let igual.

//var, não importa onde esteja, sempre será redeclarado. Enquanto let, por exemplo, sempre é recriado e nunca redeclarado.

// var só tem escopo de função. Isso é, embora ele seja uma variável 'global', onde seu valor é lido em todo o código, ha uma diferença quando utilizamos dentro de uma função:

var falaDeNovo = "Wolf";

function falaOi() {
  //var fala = "Leo";
  console.log(falaDeNovo);
}

falaOi();
//console.log(fala); // aqui, vai dar erro, pois como criamos a variavel var 'fala', ela só funciona dentro da função. Portanto, o único escopo em que var fica limitada, sem acessar o código inteiro, é dentro de uma função.

//porém, se criarmos uma variável fora do escopo da função, como a variável 'falaDeNovo = 'Wolf', podemos acessar esse var de dentro do escopo, caso não seja localizado dentro. Assim, chamando a funcção, ele é acessado normalmente.
