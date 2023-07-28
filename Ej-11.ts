function solution(n: number): boolean {
    let sumFirstHalf = 0;
    let sumSecondHalf = 0;
    let transformed = Array.from(String(n), (num) => Number(num));

    let size = transformed.length;
    console.log(transformed);
    for (let i = 0; i < size / 2; i++) {
        console.log(transformed[i]);
        sumFirstHalf += transformed[i];
    }

    console.log(sumFirstHalf);

    for (let j = size / 2; j < size; j++) {
        sumSecondHalf += transformed[j];
    }

    console.log(sumSecondHalf);

    if (sumFirstHalf === sumSecondHalf) {
        return true;
    }

    return false;
}