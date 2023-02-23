function retornaFuncao() {
  const nome = "Leo";
  return function () {
    return nome;
  };
}

const funcao = retornaFuncao();
console.dir(funcao);
//no caso, o comando 'dir' tb vai exibir no console a saída. Porém, no inspecionar do navegador, podemos ver que ela mostra que a função possui acesso a 3 escopos.
//o Closure é a habilidade dessa função de acessar o seu escopo léxico, que é a função anônima, a variável e o escopo global.
//no caso, o closure é a váriável fora da function(), no caso, o 'nome = 'Leo;'. Ela tb tem acesso ao script, onde ela foi declarada. no Caso é a função anônima. E tb tem acesso ao escopo global. Tudo que estiver no global ela tem acesso.

function retornaFuncao2(nome2) {
  return function () {
    return nome2;
  };
}

const funcao2 = retornaFuncao2("Leo"); // isso não muda mais, será 'Leo'
const funcao3 = retornaFuncao2("Pedro"); //isso tb não muda, será 'pedro'
console.dir(funcao2);
console.dir(funcao3);

console.log(funcao2(), funcao3());

//agora temos 2 closures ( 'Leo' e 'Pedro);
//No caso o closure pode mudar de função para função.

//closure é a habilidade que a função possui em acessar o seu escopo léxico.
