// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

/*---------------------------------------
 * Solution 1 using iterative [linear run-time]
-----------------------------------------*/
// function fib(n) {
//   let fibArr = [0,1];
//   for (let i=2;i<=n;i++){
//     let curr = fibArr[i-2] + fibArr[i-1];
//     fibArr.push(curr);
//   }
//   return fibArr[n];
// }

/*---------------------------------------
 * Solution 2 using recursion
-----------------------------------------*/
// function fib(n,currStep=2,predOne=0,predTwo=1) {
//   if(n<2){
//     return n;
//   }
//   if(n===currStep){
//     return predOne + predTwo;
//   }
//   return fib(n,currStep+=1,predTwo,predOne+predTwo);
// }

/*---------------------------------------
 * Solution 3 another recursion. [Exponential run-time]
-----------------------------------------*/
function slowFib(n){
  if(n<2){
    return n;
  }
  
  return fib(n-1) + fib(n-2);
}

//to solve the exponential runtime, we use memoization i.e.storage
function memoize(fn){
  const cache = {};
  /*...args means that you do not know how many arguments, 
  *and take this arguments and assign to an array called args*/
  return function(...args){
    if(cache[args]){//this means that we have called our function before
      return cache[args];
    }

    const result = fn.apply(this,args);
    cache[args] = result;

    return result;
  };
}

const fib = memoize(slowFib);

module.exports = fib;
