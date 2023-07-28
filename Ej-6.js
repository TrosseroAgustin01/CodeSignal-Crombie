function solution(statues) {
    return Math.max(...statues)-Math.min(...statues)-(statues.length-1);
    //Esta operacion refleja la cantidad de numeros que habria que agregar al array para asi lograr detectar cual es la cantidad de numeros a agregar para que sea exactamente creciente
}
