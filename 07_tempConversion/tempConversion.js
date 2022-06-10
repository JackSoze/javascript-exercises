const ftoc = function(tempf) {
  let tempc = (tempf-32)*5/9;
  tempc = Math.round(tempc * 10) / 10;
  return tempc
};

const ctof = function(tempcel) {
  let tempfarh = (tempcel*9/5)+32;
  tempfarh = Math.round(tempfarh * 10) / 10;
  return tempfarh
};

ftoc(-100)
ctof(-10)

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
