const h1 = document.querySelector(".container h1");

const data = new Date();

h1.innerHTML = data.toLocaleDateString("pt-BR", {
  dateStyle: "full",
  //timeStyle: "short", por algum motivo, isso não funciona na hora de renderizar
});

// esta é a segunda forma, mais simples, usando a documentação do MDN padrão.
