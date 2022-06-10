const sumAll = function(a,b) {
    

    let numbers = [];
    if (typeof a!=='number' || typeof b!=='number'|| a<1 || b<1) {
        return 'ERROR';
    } else if( a>b) {
        for (let i=b; i<=a; i++) {
            numbers.push(i);
        }
        let sum = numbers.reduce((total,element)=>total+element,0);
        return sum
    } else {
        for (let i=a; i<=b; i++) {
            numbers.push(i);
        }
        let sum = numbers.reduce((total,element)=>total+element,0);
        return sum
    }
    
};

sumAll(10, [90, 1]);
// Do not edit below this line
module.exports = sumAll;
