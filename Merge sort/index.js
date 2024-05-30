// Problem : Implement a merge sort algorithm which takes and array and return the sorted array
function mergeSort(array) {
  // Base case: array with fewer than 2 element should return array
  if (array.length < 2) {
    return array;
  }

  // Else
  // Find the middle index of array use Math.floor to round odd array lengths
  const middle = Math.floor(array.length / 2);

  //Divide array into equal halves
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  // Recursively sort both halves and the merge them
  return merge(mergeSort(left), mergeSort(right));
}

//merge function
function merge(left, right) {
  let mergeArray = [];
  let leftIndex = 0;
  let rightIndex = 0;

  // Compare element from both arrays and merge them in sorted other
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      mergeArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      mergeArray.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return mergeArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

let arrayOne = [2, 4, 3, 5, 6, 7, 78, 90, 45];
let arrayTwo = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

console.log(mergeSort(arrayOne));
console.log(mergeSort(arrayTwo));
