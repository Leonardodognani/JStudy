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
  let diaSemanaTexto;
  switch (semana) {
    case 0:
      diaSemanaTexto = "Domingo";
      return diaSemanaTexto;
    case 1:
      diaSemanaTexto = "Segunda";
      return diaSemanaTexto;
    case 2:
      diaSemanaTexto = "Terça";
      return diaSemanaTexto;
    case 3:
      diaSemanaTexto = "Quarta";
      return diaSemanaTexto;
    case 4:
      diaSemanaTexto = "Quinta";
      return diaSemanaTexto;
    case 5:
      diaSemanaTexto = "Sexta";
      return diaSemanaTexto;
    case 6:
      diaSemanaTexto = "Sábado";
      return diaSemanaTexto;
  }
}

function numeroMes(mes) {
  let diaMes;
  switch (mes) {
    case 0:
      diaMes = "Janeiro";
      return diaMes;
    case 1:
      diaMes = "Fevereiro";
      return diaMes;
    case 2:
      diaMes = "Março";
      return diaMes;
    case 3:
      diaMes = "Abril";
      return diaMes;
    case 4:
      diaMes = "Maio";
      return diaMes;
    case 5:
      diaMes = "Junho";
      return diaMes;
    case 6:
      diaMes = "Julho";
      return diaMes;
    case 7:
      diaMes = "Agosto";
      return diaMes;
    case 8:
      diaMes = "Setembro";
      return diaMes;
    case 9:
      diaMes = "Outubro";
      return diaMes;
    case 10:
      diaMes = "Novembro";
      return diaMes;
    case 11:
      diaMes = "Dezembro";
      return diaMes;
  }
}

const horaAtualizada = document.querySelector(".horaAtualizada");

horaAtualizada.innerHTML = formataData(data);
