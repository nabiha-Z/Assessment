/*Write a function that will take an array as input, it will rotate the array to the right 1 time and return the rotated array. Rotation of the array means that each element is shifted right by one index. 
For example, the rotation of array A = [3,8,9,7,6] is [6,3,8,9,7]*/

function rotateArray(array) {
  let lastElement = array[array.length - 1];

  for (let i = array.length - 1; i > 0; i--) {
    array[i] = array[i - 1];
  }
  array[0] = lastElement;

  return array;
}

console.log("Rotated Array: ", rotateArray([3, 8, 9, 7, 6]));
