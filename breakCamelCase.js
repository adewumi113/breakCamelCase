//https://www.codewars.com/kata/5208f99aee097e6552000148/train/javascript

// Complete the solution so that the function will break up camelement casing, using a space between words.

// Example
// "camelementCasing"  =>  "camelement Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    let finalSolution = [] //array to store character with spaces
    for (i = 0; i <= string.length - 1; i++){ //loop through the string using for loop
        let character = string[i]
        if (character === character.toUpperCase()){//to check if current character is upper case
            finalSolution.push(' ')//add space before the character
        }
        finalSolution.push(character)//add the character to the array
    }
    return finalSolution.join('')//join the characters in the array to get final result as string
  }
  solution ("stopMeNow");
  solution ("ebelementebe");
  solution ("lotOfUpperCases");

//Another solution
  function solution(string) {
    string = string.split('').map(function (element) {
      if (element === element.toUpperCase()) {
        element = ' ' + element
      }
      return element
    })
    return string.join('')
  }