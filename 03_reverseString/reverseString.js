const reverseString = function(inputString) {
    // Splits the string into an array of single characters
    const splitString = inputString.split("");
    // Reverses the array
    const reversedSplitString = splitString.reverse();
    // Joins the array with "" as the joining character
    return reversedSplitString.join("");
};

// Do not edit below this line
module.exports = reverseString;
