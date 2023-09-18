const repeatString = function(stringToRepeat, repetitionNumber) {
    let returnString = "";
    if(repetitionNumber < 0) {
        return "ERROR";
    }
    for (let i = 0; i < repetitionNumber; i++) {
        returnString += stringToRepeat;
    }

    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
