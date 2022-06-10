const reverseString = function(string) {
    let myArray = []
    for (letter of string) {
        myArray.push(letter);
    }
    myArray.reverse();
    
    return myArray.join('');
};
 reverseString('')
 // Do not edit below this line
module.exports = reverseString;
