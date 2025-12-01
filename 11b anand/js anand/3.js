let x = 1, y = 2, z = 3;// huvisagch

function min(x, y, z) { //uildel
    let d;
    if (x > y) {
        d = y;
    } else {
        d = x;
    }
    if (d > z) {
        return z;
    } else {
        return d;
    }
}

const result = min(x, y, z); //orolt
console.log(result); // garalt
