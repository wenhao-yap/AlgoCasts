// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  let num = [...Array(n+1).keys()];
  num.shift();
  let answer = num.map((x)=>{
    if(x%3==0 && x%5==0){
      return "fizzbuzz";
    } else if(x%3==0){
      return "fizz";
    } else if(x%5==0){
      return "buzz";
    } else {
      return x;
    }
  })
  answer.forEach((x)=>{
    console.log(x);
  })
}

module.exports = fizzBuzz;
