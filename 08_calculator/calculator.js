const add = function(a,b) {
  return (a+b);
};

const subtract = function(a,b) {
	return (a-b);
};

const sum = function([...theArgs]) {
  let total = theArgs.reduce((number,total) => 
     { return total +number}
  , 0);
  return total
};

const multiply = function([...theArgs]) {
  let answer = 1;
  for (const element of theArgs) {
    answer = element * answer;
  }
  return answer;
};

const power = function(a,b) {
	return  Math.pow(a,b);
};

const factorial = function(a) {
	let answer = 1;
  for (let i=a; i>0; i--) {
    answer =  answer *i;
  }
  return answer
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
