function max(x, y) {
  if (x > y) {
    return x;
  } else {
    // não precisaria do 'else', pois se a primeira for falsa, ela sai da função e poderia retornar direto o y;
    return y;
  }
}

console.log(max(1, 2));

//const maior = max(1, 2);

//outra forma mais simples, já que é um if bem curto:
function max2(a, b) {
  if (a > b) return a;
  return b;
}

console.log(max2(10, 2));

//além disso, podemos fazer mais curto ainda, utilizando operação ternária:
function max3(c, d) {
  return c > d ? c : d;
}

console.log(max3(1, 5));

//ainda ha a forma de arrow function:

const max4 = (e, f) => {
  return e > f ? c : d;
};

console.log(max3(11, 5));

//podemos eliminar as chaves e por na mesma linha e ainda teremos a mesma função, só que com menos linhas de códigos ainda:
const max5 = (g, h) => (g > h ? g : h);

console.log(max5(11, 50));
