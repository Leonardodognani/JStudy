/* 
'const' cria uma constante que NÃO pode ser redefinida.
Não podemos criar constantes com palavras reservadas da linguagem, como let, var, name, function, etc...
É importante colocar nomes significativos nas constante, que façam sentido e que expliquem ou dêem noção do que a constante faz/é.
Não podemos começar o nome de uma constante com número. É importante começar com letra minúscula.
A constante tb não pode conter espaços ou traços; no caso de mais de um nome, utilizar o padrão por convenção de 'camelCase'.
As constantes são 'Case-sensitive', ou seja, letras maiúsculas e minúsculas fazem diferença, portanto, "nomeCompleto" não seria lido caso fosse digitado "Nomecompleto" ou "nomecompleto".
Não podemos redeclarar constantes com a palavra 'CONST' ou com quelquer outra: constantes não podem ser mudadas ou redefinidas.
Normalmente não devemos usar a variável VAR, ao invés disso, usamos LET ou CONST.
*/

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
console.log(resultado);
// ao invés de mudar as constantes, podemos 'evoluir' o código, criando outras constantes e utilizando as variáveis acima:
const resultadoDuplicado = resultado * 2;
console.log(resultadoDuplicado);

console.log(typeof resultado);
