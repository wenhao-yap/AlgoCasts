// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

/*---------------------------------------
 * Solution 1 using reduce
-----------------------------------------*/
// function palindrome(str) {
//   let reverse = str.split('').reduce((rev,char) => {
//     return char + rev;
//   },'');
//   const answer = reverse === str ? true : false;
//   return answer;
// }

/*---------------------------------------
 * Solution 3 using every
-----------------------------------------*/
function palindrome(str) {
  return str.split('').every((char,i)=>{
    return char === str.split('')[str.length-1-i];
  })
}

module.exports = palindrome;
