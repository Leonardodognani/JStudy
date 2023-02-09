//terceira forma de resolver seria usar arrays nas funções maiores, diminuindo bem o numero de linhas

function zeroAEsquerda(num) {
  return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
  const semana = data.getDay();
  const dia = zeroAEsquerda(data.getDate());
  const mes = data.getMonth();
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());

  return `${diaSemana(semana)}, ${dia} de ${numeroMes(
    mes
  )} de ${ano} - ${hora}:${min}`;
}

const data = new Date();
const dataBrasil = formataData(data);

function diaSemana(semana) {
  const diaSemanaTexto = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  return diaSemanaTexto[semana];
}

function numeroMes(mes) {
  const diaMes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];
  return diaMes[mes];
}

const horaAtualizada = document.querySelector(".horaAtualizada");

horaAtualizada.innerHTML = formataData(data);
