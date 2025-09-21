const findTheOldest = function(array) {
    let ageArray = array.map((item) => {
        if (item.yearOfDeath === undefined) {
            const d = new Date()
            item.yearOfDeath = d.getFullYear()
        }
        return item.yearOfDeath - item.yearOfBirth
    })
    let maxAge = Math.max(...ageArray)
    let maxAgeIndex = ageArray.indexOf(maxAge)
    return array[maxAgeIndex]
};

// Do not edit below this line
module.exports = findTheOldest;
