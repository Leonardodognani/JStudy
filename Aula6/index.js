//Dados do exercício:

const nome = "Leonardo";
const sobrenome = "Dognani";
const anoDeNascimento = 1985;
const idade = 2023 - anoDeNascimento;
const peso = 80;
const alturaEmM = 1.67;
let imc = peso / (alturaEmM * 2); // peso / (altura * altura)

/* 
A saída será:
Leonardo Dognani tem 37 anos, pesa 80kg, tem 1,67 de altura e seu IMC é de X.
Leonardo nasceu em 1985.
*/

console.log(
  `${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, tem ${alturaEmM} de altura e seu IMC é de ${imc.toFixed(
    2
  )}`
);
console.log(`${nome} nasceu em ${anoDeNascimento}.`);
