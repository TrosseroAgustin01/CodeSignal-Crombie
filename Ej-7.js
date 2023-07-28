function solution(inputArray) {
    let count = 0;
    // inicializamos un contador en 0 para llevar el registro de cuántos  elementos no cumplen la condición de secuencia estrictamente creciente.
    for (let i = 1; i < inputArray.length; i++) {
        // Verificamos si el elemento actual es menor o igual al elemento anterior
        if (inputArray[i] <= inputArray[i - 1]) {
            count++;
            // Si se encuentran más de dos elementos no crecientes, retornar false
            if (count > 1) {
                return false;
            }
            // Verificamos condiciones adicionales para casos específicos
            if (
                i > 1 &&
                i < inputArray.length - 1 &&
                inputArray[i + 1] <= inputArray[i - 1] &&
                inputArray[i] <= inputArray[i - 2]
            ) {
                return false;
            }
            /* Se verifican condiciones adicionales para casos específicos en los que el elemento actual, el anterior y el siguiente no cumplen la condición de secuencia estrictamente creciente. Si se cumplen estas condiciones, se retorna false */
        }
    }
    // Si no se encontraron problemas, la secuencia es estrictamente creciente
    return true;
}