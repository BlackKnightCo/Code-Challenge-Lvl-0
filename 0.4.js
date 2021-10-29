//Function that checks if given number is odd or even
function oddEven(number) {
	if (number % 2 == 0){ // % Modulus Operator- Decimal with a remainder of 0 is even 
		console.log("Even number"); 
	}
	else {
		console.log("Odd Number");
	}
}

console.log(oddEven(10));