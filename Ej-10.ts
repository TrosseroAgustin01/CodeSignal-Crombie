function solution(s1: string[], s2: string[]): number {
    let counter: number = 0;
    // primero pasar a array las atrings;
    s1 = Array.from(s1);
    s2 = Array.from(s2);

    s1.forEach(e => {
        if (s2.includes(e)) {
            counter++;
            s2.splice(s2.indexOf(e), 1);// le decimos que elimine el valor de s2 que coincide con el valor de s1
        }
    });

    return counter;
}
