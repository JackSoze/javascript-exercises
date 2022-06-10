const fibonacci = function(input) {

    if (input < 0) {
        return "OOPS"
    }
//generate fibonacci sequence to 30
    var fib = [0,1];

    for (let i=2; i<=input; i++) {
         fib[i] = fib[i-2] + fib[i-1];
         fib.push(fib[i]);
    }

    let currentFib = fib.pop()

    return currentFib
};


// Do not edit below this line
module.exports = fibonacci;
