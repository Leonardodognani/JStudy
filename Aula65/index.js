const nomes = ["Leo", "Leonardo", "Leh", "Leticia", "Roberto", "Maria"];

// nomes.splice(índice, delete, elem1, elem2, elem3);

const removidos = nomes.splice(4, 1);
console.log(nomes, removidos);

//tb podemos adicionar elementos como splice.
nomes.splice(3, 0, "Lua");
console.log(nomes);

//com o splice(), podemos simular o pop, push, shift e unshift.
