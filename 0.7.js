//Convert from Celsius to Fahreinheight
function fahConverter(celTemp){
	return fahConverter = celTemp * 9/5 + 32;
}
//Convert from Fahreinheight to Celsius
  function celConverter(fahTemp){
	return celConverter = (fahTemp - 32) * 9/5;
}

console.log(fahConverter(0));
console.log(celConverter(0));