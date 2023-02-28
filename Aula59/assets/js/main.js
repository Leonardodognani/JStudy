function criaCalculadora() {
  return {
    display: document.querySelector(".display"),

    clearDisplay() {
      this.display.value = "";
    },

    realizaConta() {
      let conta = this.display.value;

      try {
        conta = eval(conta); //apenas como exemplo pro exercício, porque é uma ferramenta com riscos para segurança, pois isso permite que o usuário possa digitar códigos JS no display.

        if (!conta) {
          alert("Conta inválida");
          this.clearDisplay();
          return;
        }

        this.display.value = String(conta);
      } catch (e) {
        this.clearDisplay();
        alert("Conta Iválida");
        return;
      }
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1);
    },

    inicia() {
      this.cliqueBotoes();
      this.pressionaEnter();
    },

    pressionaEnter() {
      this.display.addEventListener("keyup", (e) => {
        if (e.keyCode === 13) {
          this.realizaConta();
        }
      });
    },

    cliqueBotoes() {
      //this -> aqui é a calculadora
      document.addEventListener(
        "click",
        function (e) {
          const el = e.target;

          if (el.classList.contains("btn-num")) {
            this.btnParaDisplay(el.innerText);
          }

          if (el.classList.contains("btn-clear")) {
            this.clearDisplay();
          }

          if (el.classList.contains("btn-del")) {
            this.apagaUm();
          }

          if (el.classList.contains("btn-eq")) {
            this.realizaConta();
          }
        }.bind(this)
      );
    },

    btnParaDisplay(valor) {
      this.display.value += valor;
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
