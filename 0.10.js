//Function that checks for common characters in Given Strings

function commonCharacterCounter(string1, string2) {
  var count = 0;
  var string = "";
  for (var i = 0; i < string1.length; i++) { // For Loop Function which checks all characters of the first string and counts the length 
    if (string2.indexOf(string1[i]) > -1 && string2.indexOf(string1[i]) == -1) { // If function which checks characters in string1 and compares to that of string two 
      count++;
      string.concat(string1[i])
    }
  }

  return count;
}

console.log(commonCharacterCounter("aabcc", "adcaa"));