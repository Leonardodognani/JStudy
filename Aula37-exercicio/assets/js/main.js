const elementos = [
  { tag: "p", texto: "Frase 1" },
  { tag: "div", texto: "Frase 2" },
  { tag: "footer", texto: "Frase 3" },
  { tag: "section", texto: "Frase 4" },
];

const container = document.querySelector(".container");

const div = document.createElement("div");

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  tagCriada.innerHTML = texto; //poderiamos usar tb .innerText, pois só ha textos e não tags html.
  div.appendChild(tagCriada); // appendChild adiciona no ultimo espaço da tag selecionada no html.
}

container.appendChild(div);
