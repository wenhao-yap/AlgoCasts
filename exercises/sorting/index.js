// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

//BubbleSort works by repeatedly swapping the adjacent elements if they are in wrong order.
function bubbleSort(arr) {
  for(let i=0; i<arr.length-1;i++){
    for(let j=0; j<arr.length-1; j++){
      if(arr[j]>arr[j+1]){
        const temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  return arr;
}

/* sorts by repeatedly finding min element (considering ascending order) from unsorted part 
and putting it at the beginning. */
function selectionSort(arr) {
}

function mergeSort(arr) {

}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
