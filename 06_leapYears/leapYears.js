const leapYears = function(inputYear) {
    // Test for 400 1st so that we know if inputYear % 100 == 0 it is not a leap year
    if (inputYear % 400 === 0) {
        return true;
    }

    if (inputYear % 4 === 0 && inputYear % 100 !== 0) {
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = leapYears;
