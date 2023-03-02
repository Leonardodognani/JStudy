//Concatenando Arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1 + a2;
console.log(a3);
// assim ele junta como esting, não como array

const a4 = a1.concat(a2);
console.log(a4);
// assim ele concatena os arrays

const a5 = a1.concat(a2, [7, 8, 9], "Leo");
console.log(a5);
//assim tb podemos concatenar mais elementos, inclusive arrays dentro

const a6 = [...a1, "leo", ...a2, ...[7, 8, 9, 10, 11]];
console.log(a6);
//da mesma forma, podemos usar o 'spread operator' para concatenar os arrays.
