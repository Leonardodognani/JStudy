//função recursiva chama ela mesma

function recursiva(max) {
  if (max > 500) return;
  max++;
  console.log(max);
  recursiva(max);
}
recursiva(-10);
//colocamos uma condição para que ela páre de repetir e decidimos um incremento.
