const nome = "Leo";

function falaNome() {
  console.log(nome);
}
falaNome();

//no caso é um exemplo de 'escopo léxico', pois a função consegue acessar e reconhece variáveis de fora, no caso, uma camada acima, no 'pai'.
//Ela vai procurar dentro do próprio escopo e, caso não ache, ela irá ao 'pai', caso não ache, irá mais uma camada acima, no avô e assim por diante, até alcançar o escopo global. Caso não o ache, ele dá erro.

function usaFalaNome() {
  falaNome();
}
usaFalaNome();
//aqui, usamos de exemplo uma função cujo escopo é apenas usar a primeira função que criamos, e tudo funciona da mesma forma.

//agora, se adicionarmos uma variável dentro da segunda função:
function usaFalaNome2() {
  const nome = "Pedro";
  falaNome();
}
usaFalaNome2();

//no caso agora, nada que eu declare na segunda função, irá alçterar a primeira. Pois o escopo léxico da primeira sabe o que foi declarado e quais os vizinhos dela mesma. Portanto, a 'const nome = 'pedro'; seria ignorada, pois quando executo 'falaNome()' dentro de 'falaNome2()', ela retorna a primeira função, cuja variável é composta pelo escopo léxico de fora, 'const nome = "Leo".
