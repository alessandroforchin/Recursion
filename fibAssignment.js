// 1 non recursive method
function fibs(n) {
    let a = 0;
    let b = 1;

    let arr = [a, b];

    for (let i = 2; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
        arr.push(b);
    }
    return arr;
}

console.log(fibs(7));

// 2 recursive method
function fibsRec(n) {
    if (n < 1) return [];

    const array = fibsRec(n - 1);
    return array.concat(n < 3 ? n - 1 : array.at(-1) + array.at(-2));
}

console.log(fibsRec(10));
