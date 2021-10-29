//Function that checks the Highest in a given list
function maximumValue(value1, value2, value3) {
  if (value1 > value2 && value1 > value3) { 
    console.log("value1 is maximun value"); 
  }
  else if (value2 > value1 && value2 > value3){
	  console.log("value2 is maximun value");
  }
  else {
	  console.log("last value is the maximum value"); //lol i tried
  }
}
  console.log(maximumValue(1,2,5,6));