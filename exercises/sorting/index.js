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
  for(let i=0; i<arr.length;i++){
    let minIdx = i;
    
    //get the lowest index of curr array
    for(j = i+1; j<arr.length;j++){
      if(arr[minIdx]>arr[j]){
        minIdx = j;
      }
    }

    if(minIdx != i){
      const lowest = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = lowest;
    }
  }
  return arr;
}

function mergeSort(arr) {
  
}

function merge(left, right) {

}

module.exports = { bubbleSort, selectionSort, mergeSort };
