const paragrafos = document.querySelector(".paragrafos");
const ps = paragrafos.querySelectorAll("p"); // aqui ele seleciona todos os 'p', com índice, como array.

// colocar a cor de fundo dos paragrafos da mesma do backgroundColorBody e a cor dos textos dos 'p' em branco.

const estilosBody = getComputedStyle(document.body);
const estilosContainer = getComputedStyle(document.querySelector(".container"));
const backgroundColorContainer = estilosContainer.backgroundColor;
const backgroundColorBody = estilosBody.backgroundColor;

for (let p of ps) {
  p.style.backgroundColor = backgroundColorBody;
  p.style.color = backgroundColorContainer;
}
