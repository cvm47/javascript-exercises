const sumAll = function (a, b) {
    let sum = 0
    for(let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        sum += i
    }
    return sum
}
console.log(1,4)

// Do not edit below this line
module.exports = sumAll;
