function meuEscopo() {
  const form = document.querySelector(".form");
  const resultado = document.getElementById("result");

  function recebeEventoForm(evento) {
    evento.preventDefault();

    const peso = form.querySelector(".peso");
    const altura = form.querySelector(".altura");

    const calculaIMC = peso.value / (altura.value * altura.value);

    if (calculaIMC <= 18.5 && calculaIMC >= 0) {
      resultado.innerHTML = `<p>Seu IMC é ${calculaIMC.toFixed(
        2
      )} (Abaixo do peso)
      </p>`;
    } else if (calculaIMC > 18.5 && calculaIMC <= 24.9) {
      resultado.innerHTML = `<p>Seu IMC é ${calculaIMC.toFixed(2)} (Peso normal)
        </p>`;
    } else if (calculaIMC >= 25 && calculaIMC <= 29.9) {
      resultado.innerHTML = `<p>Seu IMC é ${calculaIMC.toFixed(2)} (Sobrepeso)
          </p>`;
    } else if (calculaIMC >= 30 && calculaIMC <= 34.9) {
      resultado.innerHTML = `<p>Seu IMC é ${calculaIMC.toFixed(
        2
      )} (Obesidade grau 1)
            </p>`;
    } else if (calculaIMC >= 35 && calculaIMC <= 39.9) {
      resultado.innerHTML = `<p>Seu IMC é ${calculaIMC.toFixed(
        2
      )} (Obesidade grau 2)
            </p>`;
    } else if (calculaIMC > 40) {
      resultado.innerHTML = `<p>Seu IMC é ${calculaIMC.toFixed(
        2
      )} (Obesidade grau 3)
            </p>`;
    } else {
      resultado.innerHTML = `<p>Peso e/ou Altura inválida. Por favor, digite novamente.`;
    }
  }
  form.addEventListener("submit", recebeEventoForm);
}
meuEscopo();
