let x = 1, y = 3, z = 2;// huvisagch

function findMiddle(x, y, z) {
    if ((x > y && x < z) || (x < y && x > z)) {
        return x;
    } else if ((y > x && y < z) || (y < x && y > z)) {
        return y;
    } else {
        return z;
    }
}

const result = findMiddle(x, y, z);
console.log(result);