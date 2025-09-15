const removeFromArray = function(arr, ...args) {
    return arr.filter((element) => !args.includes(element));
};

// Do not edit below this line
module.exports = removeFromArray;
