function solution(a: number[]): number[] {
    let arr = [];
    let firstT: number = 0;
    let secondT: number = 0;
    for (let i = 0; i < a.length; i++) {
        if (i % 2 === 0) {
            firstT += a[i];
        } else if (i % 2 !== 0) {
            secondT += a[i]
        }
    }
    arr.push(firstT);
    arr.push(secondT);
    return arr;
}