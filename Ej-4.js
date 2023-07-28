function solution(inputArray) {
    let maxProduct = Number.NEGATIVE_INFINITY;
    //let maxProduct = Math.min(...inputArray);

    for (let i = 0; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1];
        if (product > maxProduct) {
            maxProduct = product;
        }
    }

    return maxProduct;
}
