const sumAll = function(x, y) {
    if (x < 0 || y < 0 || typeof x !== "number" || typeof y !== "number" || !Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    if (y < x) {
        let z = y;
        y = x;
        x = z;
    }
    let result = 0;
    for (let i = x; i <= y; i++) result += i;
    return result;
};

// Do not edit below this line
module.exports = sumAll;
