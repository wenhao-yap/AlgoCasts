// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


/*---------------------------------------
 * Solution 1 
-----------------------------------------*/
// function pyramid(n){
//   let i = 0;
//   while(i<n){
//     console.log( (" ").repeat(n-1-i) + ("#").repeat(2*(i+1)-1) + (" ").repeat(n-1-i));
//     i++;
//   }  
// }

/*---------------------------------------
 * Solution 2 using recursion
-----------------------------------------*/
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

pyramid(3);
module.exports = pyramid;
