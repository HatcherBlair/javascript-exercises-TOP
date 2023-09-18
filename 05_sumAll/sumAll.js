const sumAll = function(a, b) {
    // Check to make sure a and b are numbers
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    // Check to make sure both numbers are non-negative
    if ((a < 0) || (b < 0)) {
        return "ERROR";
    }

    // Does not matter if the bigger number is a or be and so we check to see which
    // one is bigger so we know what to loop too
    let sum = 0;
    if (a <= b) {
        while ( a <= b ) {
            sum += a;
            a++;
        }
    } else {
        while ( b <= a ) {
            sum +=b;
            b++;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
