//funões imediatas ou funções auto invocadas
//IIFE -> Immediately invoked function expression

//as funções convencionais 'tocam' o mescopo global. uma IIFE é uma função 'imediata', que não toca o escopo global, sendo executada imediatamente.

(function () {
  const nome = "Leo";
  console.log(nome);
})();

//da forma acima, colocamos a função entre parênteses(), seguido por mais um parênteses no final(). Como mostra o codigo acima, a função não possui acesso ao código global, como se estivesse protegida.

(function () {
  const sobrenome = "Dognani";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Leo"));
  }

  falaNome();
})();

const nome = "qualquer coisa";

console.log("escopo global:" + nome);

//no codigo acima, o exemplo fica mais fácil. Dentro da nossa IFEE, podemos usar cusures, callbacks e outras funçõers da forma que desejarmos. Ela só não terá ligação com o escoo global e será executada imediatamente. podemos ver isso com a declaração de duas variáveis 'nome' (uma de dentro da IFEE e outra no escopo global) e da impressão de ambas no console.
//também podemos adicionar parâmetros na nossa IFEE:

(function (idade, peso, altura) {
  const sobrenome = "Dognani";
  function criaNome(nome) {
    return nome + " " + sobrenome;
  }

  function falaNome() {
    console.log(criaNome("Leonardo"));
  }

  falaNome();
  console.log(idade, peso, altura);
})(37, 77, 1.67);

//note que todas as funções com 'nome' são independentes entre si e todas executam seguidamente, sem conflitos, pois todas são independentes.
