const repeatString = function(string, times) {
    let stringTimes = '';
    if (times < 0) return 'ERROR'
    for (let i = 0; i < times; i++) {
        stringTimes += string
    }
    return stringTimes
};

// Do not edit below this line
module.exports = repeatString;
