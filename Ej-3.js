function solution(inputString) {
    if(inputString === (inputString.split("").reverse().join(""))){
        return true;
    }else{
        return false;
    }
}
// cortamos la palabra y le asignamos a cada letra una posicion de un arreglo, luego invertimos ese arreglo y volvemos a unir las letras.