const relogio = document.querySelector(".relogio");
const iniciar = document.querySelector(".iniciar");
const pausar = document.querySelector(".pausar");
const zerar = document.querySelector(".zerar");

// lembrete pra quando pegar amanhã pra continuar: primeiro tem que por o preventDefault, pros cliques não reiniciarem a página.

iniciar.addEventListener("click", function (event) {
  alert("clicado no iniciar!");
});

pausar.addEventListener("click", function (event) {
  alert("clicado no pausar!");
});

zerar.addEventListener("click", function (event) {
  alert("clicado no zerar!");
});
