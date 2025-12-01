let a = 50, b = 20, c = 30;

function sort(a, b, asc = true) {
    return asc ? (a <= b ? [a, b] : [b, a]) : (a >= b ? [a, b] : [b, a]);
}

function sort3(a, b, c, asc = true) {
    let [x, y] = sort(a, b, asc);
    let [first, second] = sort(x, c, asc);
    let [secondFinal, third] = sort(second, y, asc);
    return [first, secondFinal, third];
}

const result = sort3(a, b, c, true); // true = өсөх, false = буурах
console.log(result);