// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*---------------------------------------
 * Solution 1: Using reverse()
-----------------------------------------*/
// function reverse(str) {
//   str = str.split('').reverse().join('');
//   return str;
// }

/*---------------------------------------
 * Solution 2: Creating a clone
-----------------------------------------*/
// function reverse(str) {
//   const clone = str.slice(0);
//   str = str.split('').map((x,i)=>{
//     return clone[clone.length-i-1];
//   })
//   return str.join('');
// }

/*---------------------------------------
 * Solution 3 using reduce
-----------------------------------------*/
function reverse(str) {
  return str.split('').reduce((rev,char)=>{
    debugger
    return char+rev;
  },'');
}

reverse('shopping');

module.exports = reverse;
