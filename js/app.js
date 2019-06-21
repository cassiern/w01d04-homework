// 1. VERBAL QUESTIONS:
/*
Parameters is what is declared after the function variable. 
Arguments are where you place the value 
in what's being called. Arguments, after being given,
will be placed in the  parameters.

Within in function, the return if just saying what
to do with the parameters. It doesn't ooutput anything. 
Console.log shows what is happening in the code. 

The implicationos of a 'return' returning a value 
is that in a function the 'return' returns the value 
of that function to be executed again. 
When we console.log the function, it will return
one of the return values. 
*/

/*
const checkPalindrome = (str) => {
	const first = str;
	const split = str.split('');
	const reverse = split.reverse('');
	const join = reverse.join('');
	if(join === first) {
		return true;

	} else {
		return false;
	}
}

console.log(checkPalindrome("nurse"));
*/


//PROBLEM 3

// const sumDigits = (num) => {
// 	let sum = 0; 
// 	for (i = 0; i <= num; i++) {
// 		sum += i;
	
// 	} return sum;
// }


// console.log(sumDigits(3));


//4. PYTHAGORS
/*
 function calculateSide(sideA, sideB){
 	
  		return Math.sqrt(Math.pow(sideA, 2) + Math.pow(sideB, 2));
 	}

 	console.log(calculateSide(8, 6));

*/
//5. SUM ARRAY:
/*
function sumArray(arr) {
	let sum = 0;
	for (i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
	}
console.log(sumArray([1, 2, 3, 4, 5, 6]));

*/
// function checkPrime(prime){
// 	for (i = 0; i < prime; i++){
// 		if (i % 1 === 0 || i % i === 0){
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// }
// console.log(checkPrime(6));


// 6. NOT DONE YET (SECOND PART)

function checkPrime(prime) {
	for (let i = 2; i < prime; i++) {
		if(prime % i !== 0){
			return true;
		} else {
		} return false;
	} 
}
console.log(checkPrime(7));


function printPrime(num) {
	
	for (let i = 0; i <= num; i++) {
		if (checkPrime(i) === true) {
				//need to make it go up until 97
			
			console.log(i);
		} 
	}
}
console.log(printPrime(97));






























