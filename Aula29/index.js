// ? :

const pontuacaoUsuario = 999;

if (pontuacaoUsuario >= 1000) {
  console.log("Usuário VIP");
} else {
  console.log("Usuário normal");
}

//quando ha apenas 2 opções, podemos encurtar o código com operação ternária.

const pontuacaoUsuario2 = 1000;

const nivelUsuario =
  pontuacaoUsuario2 >= 1000 ? "Usuário VIP" : "Usuário normal";
console.log(nivelUsuario);

// condição ? 'verdadeiro' : 'falso';

const corUsuario = null;
const corPadrao = corUsuario || "preta";

console.log(nivelUsuario, corPadrao);
// no caso acima, ou é exibida a cor que o usuário escolher, ou no caso de falso/null, será exibido a cor preta como cor padrão.
//No caso, se a cor do usuário for 'verdadeira', será exibida. Caso não, será usado o operador "||" - "ou" e será exibida a cor preta)
