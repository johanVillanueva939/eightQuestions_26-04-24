let number1= 12
let number2= 5
let resultDivision=number1/number2;
let resultModule= number1%number2;

function division(number1, number2,resultDivision,resultModule) {
	if (resultModule == 0) {
		return 'Entrance:'+'(' +number1+','+number2+') \n'+'Exit:'+'Division '+resultDivision+' Surplus '+'There is no residue' 
		}
		else {
		return'Entrance:'+'('+number1+','+number2+') \n'+'Exit:'+' Division '+resultDivision+' Surplus '+resultModule
	
	}
}
console.log(division(number1,number2,Math.round(resultDivision),resultModule))

