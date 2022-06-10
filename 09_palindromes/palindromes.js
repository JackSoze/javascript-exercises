const palindromes = function (str) {

    str = str.replace(/[^\w\s\']|_/g, "") //removes all symbols
             .replace(/\s+/g, '') //removes all whitespace
             .toLowerCase();

    let newstr = '';

    for (i=str.length-1; i>=0; i--) {
        newstr+=str[i];
    }

   return (newstr==str)?true:false;
    
};

// Do not edit below this line
module.exports = palindromes;
