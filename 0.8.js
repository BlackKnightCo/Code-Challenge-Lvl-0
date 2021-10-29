//Time Conversion
function timeConversion(time)
 { 
  var hours = ~~(time / 60);  // ~~ Converts into 0 Decimal Places
  var minutes = time % 60; // Remainder should be output as minutes
  if (hours > 1){
    return hours + " hours" + ":" + minutes + "minutes";  // Tells the time in Hours provided it is more than one
  }
  else {
    return hours + " hour" + ":" + minutes + "minutes";  // Tells  the time in Minutes
  }
}

console.log(timeConversion(71));
console.log(timeConversion(133));