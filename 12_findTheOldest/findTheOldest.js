const findTheOldest = function(people) {
    const oldest = people.sort((a, b) => {
        const lastGuy = ("yearOfDeath" in a ? a.yearOfDeath : (new Date()).getFullYear()) - a.yearOfBirth;
        const nextGuy = ("yearOfDeath" in b ? b.yearOfDeath : (new Date()).getFullYear()) - b.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
    })
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
