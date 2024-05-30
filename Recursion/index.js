// Fibonacci Sequence
// 1. Solution using Iteration
function iterateFibonacci(n) {
  let array = [0, 1];
  if (n < 2) return array;
  for (let i = 2; i < n; i++) {
    array[i] = array[i - 1] + array[i - 2];
  }
  return array;
}
console.log(iterateFibonacci(8));

// 2. Solution using Recursion
function recursiveFibonacci(n) {
  // Base case
  if (n <= 2) {
    return [0, 1];
  } else {
    let array = recursiveFibonacci(n - 1);
    array.push(array[array.length - 1] + array[array.length - 2]);
    return array;
  }
}
console.log(recursiveFibonacci(8));
