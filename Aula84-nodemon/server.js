const express = require("express");
// não precisa de caminho, pois é do próprio modules.
const app = express(); // usamos app por convenção
//o express vai ajudar nas rotas. vamos trabalhar com get, por enquanto.

// CRUD -> CREATE, READ, UPDATE,    DELETE
//          POST    GET    PUT      DELETE
//          criar   ler atualizar   apagar

//https://meusite.com/ <- GET -> entregue a pagina /
//https://meusite.com/sobre <- GET -> entregue a pagina /sobre
//https://meusite.com/contato <- GET -> entregue a pagina /contato

//o express entrega as rotas.

app.get("/", (req, res) => {
  //requisição, resposta
  res.send(
    `<form action="/" method="POST"> Nome: <input type="text" name="nome"><button>Enviar</button></form>`
  );
});

app.post("/", (req, res) => {
  res.send("Recebi o formulário");
});

app.get("/contato", (req, res) => {
  res.send("<h2>Obrigado por entrar em contato conosco</h2>");
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});

//para atualizar na tela, precisa parar o node e reiniciar.

//eu posso utilizar cada um do CRUD para mesma rota.
