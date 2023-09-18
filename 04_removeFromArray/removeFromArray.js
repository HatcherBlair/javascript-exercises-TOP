const removeFromArray = function(arrayToModify, ...filters) {
    for(const filter of filters) {
        for(let i = 0; i <= arrayToModify.length - 1; i++) {
            if (arrayToModify[i] === filter) {
                arrayToModify.splice(i, 1);
            }
        }
    }
    return arrayToModify;
};

// Do not edit below this line
module.exports = removeFromArray;
