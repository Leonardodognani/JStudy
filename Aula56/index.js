function rand(min = 1000, max = 3000) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}

function f1(callback) {
  setTimeout(function () {
    console.log("f1");
    if (callback) callback();
  }, rand());
}
function f2(callback) {
  setTimeout(function () {
    console.log("f2");
    if (callback) callback();
  }, rand());
}
function f3(callback) {
  setTimeout(function () {
    console.log("f3");
    if (callback) callback();
  }, rand());
}

f1(function () {
  f2(function () {
    f3(function () {
      console.log("Olá mundo");
    });
  });
});

//o console.log 'ola mundo', neste caso, será o primeiro a ser impresso, pois as outras funções possuem timeout.

//agora, com a função 'rand()', fazemos com que um numero aeatório seja gerado entre 1000 e 3000. Então, ao invés de adicionarmos o tempo no setInterval, adicionamos a função rand(). Assim, cada vez que execurtarmos, o tempo de cada setInterval será diferente, fazendo suas respectivas impressões saírem em ordens aleatórias.

//agora estamos adicionando o parâmetro de 'callback' nas funções. callback é uma função que pode ou não ser recebida aqui. Se eu precisar executrar algo depois da função, eu executo o callback.

//modificamos o código para que cada vez que executarmos uma função, como f1(), que ela 'puxasse' uma outra função, que seria um callback, no caso o f2(), que por sua vez tem outro callback, f3(), que por sua vez puxa um console.log. Dessa forma, fizemos um 'callback hell', uma escada, definindo a ordem das funções a serem executadas.
//cada função tem um if, dizendo que se existir um callback, então o callback deve ser executado, fazendo com que os callback da escada no final seja executada na ordem.
//A fim de não criar um callback hell gigantesco, com uma árvore que pode ficar realmente muito extensa, podemos escrveer os callbacks da seguinte forma:

f1(f1callback);

function f1callback() {
  f2(f2callback);
}
function f2callback() {
  f3(f3callback);
}
function f3callback() {
  console.log("Olá mundo 2");
}

//desta forma, ao invés de chamar as funções anônimas dentro um das outras, aqui definimos os nomes das funções de forma separada, uma chamando a outra, reproduzindo, da mesma forma, o código anterior. Se deixarmos ambos funcionando, será executado de forma simultânea e igual.
