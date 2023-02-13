/*
Escreva uma função chamada ePaisagem que recebe dois argumentos, largura e altura de uma imagem (number).
Retorne true se a imagem estiver no modo paisagem.
*/

// minha conclusão
const ePaisagem = (l, a) => (l > a ? true : false);
console.log(ePaisagem(10, 8));

// na conclusão do professor, ele foi um pouco além, mostrando que neste caso, como queremos somente 'true' ou 'false', não precisariamos nem do ternário, pois automaticamente a função já retorna 'true' ou 'false' sem precisar ser especificado:
const ePaisagem2 = (largura, altura) => largura > altura;
console.log(ePaisagem2(10, 8));
