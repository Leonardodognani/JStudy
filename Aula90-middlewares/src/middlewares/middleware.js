module.exports = (req, res, next) => {
  if (req.body.cliente) {
    req.body.cliente = req.body.cliente.replace("Leo", "NÃO POSTE LEO");
    console.log();
    console.log(`Vi que você postou ${req.body.cliente}`);
    console.log();
  }

  next();
};

//poderíamos tb usar outros middleware e todos poderiam ser usados.

// tb daria pra usar no lugar de 'module.exports', o 'exports.middlewareGlobal'.

//Então colocaríamos o 'middlewareGlobal' na const da página 'server.js', só que entre '{}' e no app.use da mesma página.
