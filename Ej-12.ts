function solution(a) {
  let copy = [...a];
  let sortedCopy = copy.filter((num) => num !== -1).sort((a, b) => a - b);
  let index = 0;
  for (let i = 0; i < copy.length; i++) {
    if (copy[i] !== -1) {
      //si el valor en la posicion i es distinto a 0 le asigno a esa posicion el primer valor de mi array ya modificado;
      copy[i] = sortedCopy[index];
      index++;
    }
  }
  return copy;
}
