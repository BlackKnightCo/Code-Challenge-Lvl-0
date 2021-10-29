//Counting Vouwels in a given string
function vowelCounter(str){
	var count = 0;
	var vowels = "aeiouAEIOU";
	
	for (var i = 0; i < str.length; i++){ //A For Loop which takes down all the values of a string
		if (vowels.indexOf(str[i]) > -1){ //If function which returns all the vowel characters of the string provided they have a value 
			count++; //add all the vowel characters of the string
		}
	}
	return "This string has " + count + " vowels";
}
console.log(vowelCounter("umuzi vohdtyTUIO")); 