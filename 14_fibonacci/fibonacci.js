const fibonacci = function(num) {
    
    if (+num === 0) return 0
    else if (+num === 1) return 1
    else if (+num < 0) return 'OOPS'
    else {
        let a = 0, b = 1, c = a + b;
        for (let i = 2; i < num; i++) {
            a = b
            b = c
            c = a + b
        }
        return c
    }
};

// Do not edit below this line
module.exports = fibonacci;
