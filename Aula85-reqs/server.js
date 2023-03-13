const express = require("express");
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.send(
    `<form action="/" method="POST"> Nome do Cliente: <input type="text" name="nome"><button>Enviar formulário</button></form>`
  ); // o NOME do app.post está vindo do 'nome' daqui do input
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi ${req.body.nome}`); // NOME daqui vem dali de cima, do input
});

app.get("/testes/:idUsuarios?/:parametro?", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  //res.send(req.params);
  res.send(req.query.facebookprofile);
});

app.listen(3000, () => {
  console.log("Acessar http://localhost:3000");
  console.log("Servidor executando na porta 3000");
});
