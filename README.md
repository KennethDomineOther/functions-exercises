Kenneth Domine
Original repository- (https://github.com/SF-WDI-LABS/functions-exercises.git).

"I found the mathmatical problems the most interesting. I was able to get the code to work and after looking at the solutions to compare my answers, I realized my approach to the math problems were a little different than the solutions page, but still had the same results. Out of everything I was able to complete, the vowel checker gave me the most trouble. The triangle problem didn't take as long as I thought it would, but I couldn't figure out the pyramid problem on my own."



<!--## Deliverable

When you wrap up work, edit this README to include your name, a link to the original repository, and a 3-5 sentence reflection on completing this assignment. Example:

> I was a able to complete all of the mathematical functions, but the string related functions were difficult for me. I spoke with the evening TA and she helped me solve the ASCII triangle function. I'm still feeling iffy on writing my own loops.

Push your updates to GitHub and add a link to the repo to the "My Work" section of your website!

## Function Definitions!


### 1.  Build your own concatenation
Return a new string that is the combination of two arguments passed into the function

**Example: `dog` and `house` will return `doghouse`**
<details>
<summary>Function signature (only look at this after you've thought about what it should look like)</summary>

  ```javascript
  function combineWords(word1, word2) {
  	// TODO: Place your code here
  }
  var result = combineWords('dog', 'house');
  console.log(result);
  // displays 'doghouse'
  ```

</details>

### 2.  Repeat a phrase
Display an argument phrase to the console n times
<details>
<summary>Function signature (only look at this after you've thought about what it should look like)</summary>

```javascript
function repeatPhrase(phrase, n) {
	// TODO: Place your code here
}

repeatPhrase("Hello", 5);
// displays
// Hello
// Hello
// Hello
// Hello
// Hello
```

</details>

### 3.  Build your own Power function
Return number <sup>power</sup> *without* using built-in `Math` functions.

**Example**:   
**4<sup>5</sup> = 4 \* 4 \* 4 \* 4 \* 4 = 1024**
<details>
<summary>Function signature (only look at this after you've thought about what it should look like)</summary>

```javascript
function toTheNthPower(number, power) {
	// TODO: Place your code here		
}

var result = toTheNthPower(4, 5);
console.log(result);
// displays 1024
```

</details>

### 4. Area of a circle:  &pi; r<sup>2</sup>
Return the area of a circle given the radius  
[background information](http://www.mathgoodies.com/lessons/vol2/circle_area.html)

<details>
<summary>Function signature (only look at this after you've thought about what it should look like)</summary>

```javascript
function areaOfACircle(radius) {
	// TODO: Place your code here
}

var result = areaOfACircle(2);
console.log(result);
// displays approximately 12.57
```

</details>

### 5.  Pythagorean Theorem: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
Return c given a and b.
[background information](https://en.wikipedia.org/wiki/Pythagorean_theorem)

<details>
<summary>Function signature (only look at this after you've thought about what it should look like)</summary>

```javascript
function pythagoreanTheorem(a, b) {
	// TODO: Place your code here
}

var result = pythagoreanTheorem(3, 4);
console.log(result);
// should display 5;
```

</details>

###  6. Is X Evenly Divisible by Y ?
Return a boolean value whether or not X can be divided by Y without any remainders.  

*Hint: Explore the world of Modulus operators!*

<details>
<summary>Function signature (only look at this after you've thought about what it should look like)</summary>

```javascript
function isXEvenlyDivisibleByY(x, y) {
	// TODO: Place your code here
}

var result = isXEvenlyDivisibleByY(99, 3);
console.log(result);
// displays true
```

</details>

### 7.  Vowel Count:
Return the number of occurrences of vowels in a word.
Vowels are `a`, `e`, `i`, `o`, `u`, and `y`

<details>
<summary>Function signature (only look at this after you've thought about what it should look like)</summary>

```javascript
function countVowels(word) {
	// TODO: Place your code here
}

var result = countVowels("stealing");
console.log(result);
// displays 3
```

</details>

*Challenge: Can you alter the code to count both upper case AND lower case?*

### 8. Does the array contain "wdi"?
Given an array, return `true` if it contains the string "wdi" and `false` if it does not contain that string.

```javascript
findWdi([9,'Bart Simpson', true, 'wdi']) // returns true
findWdi(['a','b','c']) // returns false
```

<details>
<summary>Function signature (only look at this after you've thought about what it should look like)</summary>

```javascript

	function findWdi(arr){
		// TODO: Place your code here
	}

```

</details>

### 9. Find the longest word in a sentence
Given a string representing a sentence, return the longest word in that sentence.

<details>
<summary>Function signature (only look at this after you've thought about what it should look like)</summary>

```javascript
findLongestWord("The rain in Spain falls mainly on the plain"); // => "mainly"
findLongestWord("abcdefghijkl"); // => "abcdefghijkl"
```

```javascript
function findLongestWord(sentence) {
    // TODO: Place your code here
}
```

</details>

### 10. Build an ASCII Triangle!
Display a simple triangle with asterisks

**Example:   
printTriangle(5)**

```javascript
*
**
***
****
*****
```

<details>
<summary>Function signature (only look at this after you've thought about what it should look like)</summary>

```javascript
function printTriangle(length) {
	// TODO: Place your code here
}

printTriangle(3);
// displays
// *
// **
// ***
```

</details>

### 11. Create a heads-or-tails game.
In a separate file, create a super-simple HTML page that contains an element with the id `result`, and link your HTML page to a js file. In that js file, define 3 functions:
* A function that returns either "heads" or "tails", the result of a coin flip.
* A function that, when called, prompts the user to guess either "heads" or "tails" and returns their guess.
* A function that takes in a string and puts that string into the `result` element on your page.

Then, write a fourth function that wraps all of these functions into one, so that calling that fourth function will prompt the user to guess heads or tails, flip a coin, and then tell the user whether or not they were right. Make sure that calling just that function from the console works as expected.

### 12. Stretch Challenge: Can you alter the printTriangle function to create a Pyramid?
**Example:  printPyramid(10);**

```javascript
           *
          * *
         * * *
        * * * *
       * * * * *
      * * * * * *
     * * * * * * *
    * * * * * * * *
   * * * * * * * * *
  * * * * * * * * * *
```

*Warning: This is a surprisingly tricky interview-level exercise.  Try at your own risk!*

```javascript
function printPyramid(length) {
	// TODO: Place your code here
}
```
-->
