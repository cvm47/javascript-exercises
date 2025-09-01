const removeFromArray = function(arr, ...moreArgs) {
    for (const arg of moreArgs) {
        while (arr.indexOf(arg) !== -1) {
            let index = arr.indexOf(arg)
            arr.splice(index, 1)
        }
    }
    return arr
};
// console.log(removeFromArray([1,2,2,3,4], 2, 4))

// Do not edit below this line
module.exports = removeFromArray;
