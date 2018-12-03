// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

/*---------------------------------------
 * Solution 1 using substring
-----------------------------------------*/
function capitalize(str) {
  let arr = str.split(" ").map((x,i)=>{
    let output = x.substring(0,1).toUpperCase();
    if(x.length > 1){
      output += x.substring(1,x.length);
    }
    return output;
  })
  return arr.join(" ");
}

module.exports = capitalize;
