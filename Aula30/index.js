//Date é uma função construtora. Sempre começa com a primeira letra maiúscula
/*
const data = new Date(0); // 01/01/1970 Timestamp unix ou época unix
console.log(data);
console.log(data.toString());
*/

//assim, sem parâmetro, ele exibe a hora/minuto/segundo/milésimo em que é executado
const data = new Date();
console.log(data.toString());

const data2 = new Date(2019, 3, 20, 15, 14, 27, 500);
//ano, mês, dia, hora, minuto, segundo, milésimo
console.log(data2.toString());

//se emitir algum dado da hora, ele irá expor zerado. A não ser o dia, que volta ao 1. Não da pra emitir o mês, senão ele irá considerar o ano como milésimo de segundos.
//A contagem do mês começa no 0 (zero), como os elementos de um array. Portanto, janeiro é 0, fevereiro é 1, etc.

//podemos colocar o valor de Date como string no formato de data, e ele irá imprimir a data da mesma forma:
const data3 = new Date("2023-04-20T20:20:30.200");
const data4 = new Date("2023-01-20"); // se não usar o T para dizer as horas, ele irá usar a diferença entre 00:00 e o GMT do país/região em que estivermos. No caso daqui do Brasil, -3h, logo ele uirá exibir 21h.
console.log(data3.toString());
console.log(data4.toString());

//Podemos tb selecionar somente o atributo que desejamos
console.log("Dia", data4.getDate());
console.log("Mês", data4.getMonth() + 1); //porque o mês começa do zero.
console.log("Ano", data4.getFullYear());
console.log("Hora", data4.getHours());
console.log("Min", data4.getMinutes());
console.log("Seg", data4.getSeconds());
console.log("ms", data4.getMilliseconds());
console.log("Dia da semana", data4.getDay());

console.log(Date.now()); // isso faz com que ele imprima todos os milésimos de segundos desde o timestamp de 01/01/1970, que dará "1675713249981".
//COlocando o valor de milésimos de segundo num new Date, ele imprime a data correta baseada nos milésimos de segundo.
const data5 = new Date(1675713249981);
console.log(data5); // (Hoje, no momentro em que fiz o comando acima)

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}
// aqui criamos uma função simples usando ternário para pode adicionar o "0" antes dos números menores do que 10.
function formataData(data) {
  console.log(data);
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const seg = zeroAEsquerda(data.getSeconds());

  return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataA = new Date();
const dataBrasil = formataData(data);
console.log(dataBrasil);
