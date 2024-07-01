/* Write a function that will take an array as input and return an array with every missing element from 0 to the highest entry. 
For example, in an array [3,4,9,1,7,3,2,6] the highest entry is 9, and missing numbers are [0,5,8] */

function findMissingNumber(array) {
  let missingNumbers = [];
  let max = array[0];
  for (let i = 1; i < array.length; i++) {
    if (max < array[i]) max = array[i];
  }

  let trackPresenece = new Array(array.length).fill(false);

  for(num of array) {
    trackPresenece[num] = true;
  }

  for (let j = 0; j <= max; j++) {
    if (!trackPresenece[j]) {
      missingNumbers.push(j);
    }
  }

  return missingNumbers;
}

const array = [3, 4, 9, 1, 7, 3, 2, 6];
const missing_numbers = findMissingNumber(array);
console.log("Input Array: ", array);
console.log("Missing Number is the above array: ", missing_numbers);
