const numero = 10;

if (numero < 11) {
  console.log("O número é menor do que 10");
}

if (numero >= 0 && numero <= 5) {
  console.log("O número está entre 0 e 5.");
} else if (numero >= 6 && numero <= 8) {
  console.log("O número está entre 6 e 8.");
} else if (numero >= 9 && numero <= 11) {
  console.log("O número está entre 9 e 11.");
} else {
  console.log("O número NÃO está entre 0 e 11.");
}

console.log("Aqui vai o resto do código");
//Temos que lembrar que o JS vai checar as condições e assim que ele achar uma afirmação 'true', ele irá executar o trecho de código pedido e irá ignorar todas as outras condições abaixo. No caso, ele iria para o próximo código ou bloco de código, lendo de cima para baixo.

// O JS vai ler os blocos na ordem de cima para baixo, da esquerda pra direita.
