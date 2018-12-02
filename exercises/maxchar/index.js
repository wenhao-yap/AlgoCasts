// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const result = {
    char:'',
    count:0
  }
  const charSet = new Set(str.split(''));
  charSet.forEach((char)=>{
    const temp = str.split('').filter(x => x===char);
    if(temp.length > result.count){
      result.count = temp.length;
      result.char = char;
    }
  })
  return result.char;
}

module.exports = maxChar;
