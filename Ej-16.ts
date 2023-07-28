function solution(a: number[], b: number[]): boolean {
    if (a.length !== b.length) {
    return false;
  }
    
  let differences = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      differences.push(i);
    }
  }

  if (differences.length === 0) {
    return true;
  }

  if (differences.length > 2 || differences.length < 2) {
    return false;
  }

  let [firstValue, secondValue] = differences;
  console.log([firstValue, secondValue] = differences);
  console.log(firstValue, secondValue);
  console.log(a[firstValue] === b[secondValue] && a[secondValue] === b[firstValue])
  return a[firstValue] === b[secondValue] && a[secondValue] === b[firstValue];
    
}
