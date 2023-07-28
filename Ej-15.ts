function solution(picture: string[]): string[] {
    let copy = picture;
    let large = copy[0].length;
    let border = "*";
    copy.push(`${border.repeat(large + 2)}`);
    copy.unshift(`${border.repeat(large + 2)}`);
    for (let i = 1; i < copy.length - 1; i++) {
        copy[i] = `*${copy[i]}*`;
    }
    return copy;
}
