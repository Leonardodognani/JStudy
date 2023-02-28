function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    fala: function (assunto) {
      return `${nome} está ${assunto}`;
    },
  };
}
const p1 = criaPessoa("Leo", "Leh");
console.log(p1.fala("falando sobre JS"));

//ja usamos algumas vezes o conceito de factory functions em outros exemplos, como do tipo da função acima. Nesta aula vamos nos aprofundar mais.
//adicionamos um método como função anonima dentro da função.

//vamos ver mais um pouco usando uma Factory function
function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
    //Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
    //Setter
    set nomeCompleto(valor) {
      valor = valor.split(" ");
      this.nome = valor.shift();
      this.sobrenome = valor.join(" ");
      console.log(valor);
    },
    fala(assunto = "falando sobre nada") {
      return `${this.nome} está ${assunto}`;
    },
    altura,
    peso,
    get imc() {
      const indice = this.peso / this.altura ** 2;
      return indice.toFixed(2);
    },
  };
}
const p2 = criaPessoa("Maria", "Joaquina", 1.55, 50);
const p3 = criaPessoa("Sakura", "Hinata", 1.5, 45);
console.log(p2.fala("falando sobre JS"));
console.log(p2.fala());
console.log(p3.imc);
console.log(p3.nomeCompleto);
p3.nomeCompleto = "Roberto Leonardo Dognani dos Santos";

//sempre que utilizarmos um 'objeto.metodo' do objeto, o this vai se refeirr ao objeto que está chamando(no caso o p2)

const p4 = criaPessoa("Leo", "Joaquina", 1.55, 50);
const p5 = criaPessoa("Jack", "Joaquina", 1.55, 50);
const p6 = criaPessoa("Judy", "Joaquina", 1.85, 70);

console.log(p6.imc);
