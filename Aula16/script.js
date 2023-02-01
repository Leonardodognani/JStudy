const numero = Number(prompt("Digite um número:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = `<p>Seu número + 2 é ${numero + 2}</p>`;
texto.innerHTML += `<p>A raiz quadrada do seu número é: ${numero ** 0.5}</p>`;
texto.innerHTML += `<p>O número ${numero} é um número inteiro: ${Number.isInteger(
  numero
)}</p>`;
texto.innerHTML += `<p>Seu número (${numero}) é NaN: ${Number.isNaN(
  numero
)}</p>`;
texto.innerHTML += `<p>Arredondado para baixo é: ${Math.floor(numero)}</p>`;
texto.innerHTML += `<p>Arredondado para cima é: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com 2 casas decimais: ${numero.toFixed(2)}</p>`;
