/*Write a function that will take an array as input and return the sum of the two largest numbers in a n array.
For example, in the array [3,7,1,5,11,19] the result would be 30 because 11 and 19 are the largest numbers. */

function sumOfLargestNumbers(array) {
  let max1 = -5555;
  let max2 = -555;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > max1) {
      max2 = max1;
      max1 = array[i];
    } else if (array[i] > max2) {
      max2 = array[i];
    }
  }
  return max1 + max2;
}

console.log(
  "Sum of two largest numbers: ",
  sumOfLargestNumbers([3, 7, 1, 5, 11, 19])
);
