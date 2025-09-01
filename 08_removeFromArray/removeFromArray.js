const removeFromArray = function(arr, ...moreArgs) {
    for (const arg of moreArgs) {
        let index = arr.indexOf(arg)
        while (index !== -1) {
            arr.splice(index, 1)
        }
        return arr
    }
};

// Do not edit below this line
module.exports = removeFromArray;
