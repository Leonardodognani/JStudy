alert("Olá! Clique no OK para continuar!"); // faz um alerta na página com a opção de OK. O retorno sempre é undefined.
confirm("deseja continuar?"); // exibe uma caixa, mas com opções de confirmar ou cancelar. Retorna boolean.
prompt("Desta vez você pode escrever algo:"); // exibe uma mensagem, mas com uma caixa de texto para o usuário escrever. Retorna o que o usuário escreveu como string.

let confirma = confirm("Deseja continuar?");
console.log(confirma); //neste caso, a variável "confirma" ir´pa receber o valor de true ou false, dependendo da opção do usuário.

let nomeUsuario = prompt("Digite seu nome!");
console.log(nomeUsuario); // aqui, a variável "nomeUsuario" irá receber o valor de string que o usuário digitar.

alert("Agora um exercício de multiplicar!");
let num1 = prompt("Digite um número para miltiplicarmos:");
num1 = Number(num1);
let num2 = prompt("Agora digite outro número para multiplicarmos o anterior");
num2 = Number(num2);

let resultado = num1 * num2;

alert(`O resultado da multiplicação é de ${resultado}`);
console.log(resultado);
