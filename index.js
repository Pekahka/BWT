// №1
let simpleArray = [9, 3, 1, 122, 5, 189];

// Using Math method
console.log(Math.max.apply(null, simpleArray))

// Without any JS method

function isNumberInArrayMax(numberArray) {
	let result = 0;
	for (variable of numberArray) {
		if (variable > result) {
			result = variable
		}
	}
	return result;
}

console.log(isNumberInArrayMax(simpleArray))

// №2

function bubbleSort(numberArray) {
	for (let i = 0; i < numberArray.length - 1; i++) {
		let swap = false;
		for (let j = 0; j < numberArray.length - 1; j++) {
			if (numberArray[j] > numberArray[j + 1]) {
				[numberArray[j], numberArray[j + 1]] = [numberArray[j + 1], numberArray[j]];
				swap = true;
			}
		}
		if (!swap) break;
	}
	return numberArray;
};

console.log(bubbleSort([2, 1, 3, 6, 5]))

// №3

// Связь между продуктами и тегами должна быть One to Many

// SELECT f.*
// 	FROM tags AS v LEFT JOIN products AS f ON f.id = v.name
// 	WHERE COUNT(name) > 10

// № 4
function binarySearch(value, list) {
	let first = 0;
	let last = list.length - 1;
	let position;
	let found = false;
	let middle;

	while (found === false && first <= last) {
		middle = Math.floor((first + last) / 2);
		if (list[middle] == value) {
			found = true;
			position = middle;
		} else if (list[middle] > value) {
			last = middle - 1;
		} else {
			first = middle + 1;
		}
	}
	if (found === false) {
		return 'Number not found'
	}
	return position + 1;
}

console.log(binarySearch(12, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]));

// №5

class TwoDivisionVector {
	constructor(a = { x: 0, y: 0 }, b = { x: 0, y: 0 }, result = { x: 0, y: 0 }) {

		this.a = a;
		this.b = b;
		this.result = result;
	}

	addition() {
		this.result.x = this.a.x + this.b.x;
		this.result.y = this.a.y + this.b.y;
		return this.result;
	}

	subtraction() {
		this.result.x = this.a.x - this.b.x;
		this.result.y = this.a.y - this.b.y;
		return this.result;
	}

	multiply(number) {
		this.result.x = this.b.x - this.a.x;
		this.result.y = this.b.y - this.a.y;
		this.result.x = this.result.x * number;
		this.result.y = this.result.y * number;
		return this.result;
	}

	printVector() {
		// this.result = JSON.stringify(this.result)
		return Object.entries(this.result).reduce((str, [p, val]) => {
			return console.log(`${p}:${val}`);
		}, '');
	}
	// 	return console.log(this.result);
	// }
}

let newVector = new TwoDivisionVector({ x: 2, y: 2 }, { x: 1, y: 1 });
newVector.addition();
newVector.printVector()
// new TwoDivisionVector({ x: 2, y: 2 }, { x: 1, y: 1 }).multiply(2).printVector()

// №6
function isPalindrome(palindromString) {
	var lowRegStr = palindromString.toLowerCase().split(' ').join('');
	var reverseStr = lowRegStr.split(' ').reverse().join('');
	return reverseStr === lowRegStr;
}

console.log(isPalindrome("Молебен о коне белом"));