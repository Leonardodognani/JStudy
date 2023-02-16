//relembrando:

//Declaração de função (Function hoisting)
falaOi();
//É possível 'chamar' a função, mesmo antes de ser delarada. Funciona da mesma forma.
function falaOi() {
  console.log("Oie");
}

// First-class objects (Objetos de primeira classe)
// Function expression
const souUmDado = function () {
  console.log("Sou um dado");
};
souUmDado();

function executaFuncao(funcao) {
  console.log("Vou executar sua função abaixo");
  funcao();
}
executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
  console.log("Sou uma arrow function");
};
funcaoArrow();

//dentro de um objeto
const obj = {
  falar() {
    console.log("Estou falando...");
  },
};
obj.falar();
