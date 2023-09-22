const fibonacci = function(member) {
    if (member < 0) return "OOPS";
    
    let i;
    let fibonacciArray = [1, 1];
    for (i = 2; i < member; i++) {
        fibonacciArray[i] = fibonacciArray[i-1] + fibonacciArray[i-2];
    }
    return fibonacciArray[i-1];
};

// Do not edit below this line
module.exports = fibonacci;
