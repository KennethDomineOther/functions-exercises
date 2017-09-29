// TODO: add your solutions here!
1. var combineWords = function (word1, word2){
	var result = word1 + word2;
	return result;
	console.log(result); 
}
combineWords("cat","fish");

2. function repeatPhrase(phrase, n) {
	for(var i = 0; i < n; i++) {
		console.log(phrase);
	}
}
repeatPhrase("horse", 5 );

3.function toTheNthPower(number, power) {
    var result= number**power;
    return result;
    console.log(result)
}

toTheNthPower(4,5);


4.function areaOfACircle(radius) {
	var pi = 3.14;
	var result= 3.14 * (radius * radius);
	console.log(result);
}

areaOfACircle(2);


5. var pythagoreanTheorem = function(a,b){
	var cSquared = (a*a)+(b*b);
	var c = Math.sqrt(cSquared);
	return c;
	console.log("c");
}
 pythagoreanTheorem(3, 4);


6. function isXEvenlyDivisibleByY(x, y) {
	var result = x % y === 0;
	return result;
}

7. function countVowels(word) {
	var count = 0;
	word = word.toLowerCase();
	for(var i = 0; i < word.length; i++) {
		if( word[i] === 'a' || word[i] === 'e' || word[i] === 'i' || word[i] === 'o' ||  word[i] === 'u' ||  word[i] === 'y'){
			count++;
			return count;

		}
	}
	return count;
	console.log(count);
}
countVowels("stealing");

8. function findWdi(arr){
	for (var i = 0; i < arr.length; i++) {
		if(arr[i] === 'wdi'){
			return true;
		}
	}
	return false;
}
findWdi([9,'Bart Simpson', true, 'wdi'])

9.function findLongestWord(sentence) {
	var longestLength = -1;
	var longestIndex = -1;
	var arr = sentence.split(" ");
	for (var i = 0; i < arr.length; i++) {
		if (arr[i].length > longestLength) {
			longestLength = arr[i].length;
			longestIndex = i;
		}
	}
	return arr[i];
}
findLongestWord("The rain in Spain falls mainly on the plain");

10.function printTriangle(length) {
	for(var i = 1; i <= length; i++) {

		var level = '';

		for(var j = 0; j < i; j++) {
			level += '*';
		}

		console.log(level);
	}
}
printTriangle(10);

