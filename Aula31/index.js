const data = new Date("1987-04-21 00:00:00");
const diaSemana = data.getDay();
let diaSemanaTexto;

if (diaSemana === 0) {
  diaSemanaTexto === "Domingo";
} else if (diaSemana === 1) {
  diaSemanaTexto = "Segunda";
} else if (diaSemana === 2) {
  diaSemanaTexto = "Terça";
} else if (diaSemana === 3) {
  diaSemanaTexto = "Quarta";
} else if (diaSemana === 4) {
  diaSemanaTexto = "Quinta";
} else if (diaSemana === 5) {
  diaSemanaTexto = "Sexta";
} else if (diaSemana === 6) {
  diaSemanaTexto = "Sabado";
} else {
  diaSemanaTexto = "Dia da semana inválida";
}

console.log(diaSemana, diaSemanaTexto);

//com o switch, temos a opção de fazer o mesmo código de uma forma mais simplicficado

function getDiaSemanaTexto(diaSemana1) {
  // podemos por tb numa função
  let diaSemanaTexto1;
  switch (diaSemana1) {
    case 0:
      diaSemanaTexto1 = "Domingo";
      return diaSemanaTexto1;
    case 1:
      diaSemanaTexto1 = "Segunda";
      return diaSemanaTexto1;
    case 2:
      diaSemanaTexto1 = "Terça";
      return diaSemanaTexto1;
    case 3:
      diaSemanaTexto1 = "Quarta";
      return diaSemanaTexto1;
    case 4:
      diaSemanaTexto1 = "Quinta";
      return diaSemanaTexto1;
    case 5:
      diaSemanaTexto1 = "Sexta";
      return diaSemanaTexto1;
    case 6:
      diaSemanaTexto1 = "Sábado";
      return diaSemanaTexto1;
  }
}

const data1 = new Date("1987-04-25 00:00:00");
const diaSemana1 = data1.getDay();
const diaSemanaTexto1 = getDiaSemanaTexto(diaSemana1);

console.log(diaSemana1, diaSemanaTexto1);
