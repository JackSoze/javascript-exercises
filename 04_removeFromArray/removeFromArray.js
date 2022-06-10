const removeFromArray = function(myArray,...args) {
    args.forEach((arg)=>{
        let index = myArray.indexOf(arg);
        if (index != -1) {
            myArray.splice(index,1)
        }
    })

    return myArray
};

removeFromArray([1, 2, 3], "1", 3);
// Do not edit below this line
module.exports = removeFromArray;
