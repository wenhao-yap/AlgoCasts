// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

/*---------------------------------------
 * Solution 1 using repeat
-----------------------------------------*/
// function steps(n) {
//   let i = 0;
//   while(i<n){
//     console.log(("#").repeat(i+1) + (" ").repeat(n-1-i));
//     i++;
//   }  
// }

/*---------------------------------------
 * Solution 2 using recursion
-----------------------------------------*/
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

module.exports = steps;
