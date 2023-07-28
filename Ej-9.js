function solution(inputArray) {
    let maxLength = 0;
    let newArray = [];

    // Encuentra la longitud máxima de las palabras en inputArray
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length > maxLength) {
            maxLength = inputArray[i].length;
        }
    }

    // Agrega las palabras que tienen la longitud máxima al nuevo array
    for (let i = 0; i < inputArray.length; i++) {
        if (inputArray[i].length === maxLength) {
            newArray.push(inputArray[i]);
        }
    }

    return newArray;
}

let inputArray = ["vaso", "tierra", "habilidad", "exterminación", "dar", "de"];
console.log(solution(inputArray));