// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

/*---------------------------------------
 * Solution 1 using iterative
-----------------------------------------*/
// function vowels(str) {
//   const vowels = ['a','e','i','o','u'];
//   let count = 0;
//   str = str.toLowerCase();
//   for(let char of str){
//     if (vowels.includes(char)){
//       count++;
//     }
//   } 
//   return count;
// }

/*---------------------------------------
 * Solution 2 using regex
-----------------------------------------*/
function vowels(str) {
  let found = str.match(/[aeiou]/gi); 
  //g ensure that we does not stop at the first match
  //i ensure that it is case insensitive
  return found ? (found.length):(0);
}

module.exports = vowels;
