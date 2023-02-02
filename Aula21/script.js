function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  const pessoas = [];

  /*
  form.onsubmit = function (evento) {
    evento.preventDefault();
    apenas para checagem
    alert("1");             
    console.log("enviado!");
    
  };
  */
  function recebeEventoForm(evento) {
    evento.preventDefault();
    //console.log("nao foi enviado"); apenas para checagem.

    const nome = form.querySelector(".nome");
    const sobrenome = form.querySelector(".sobrenome");
    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");
  }

  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
