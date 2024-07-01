/* Write a function that will take an array as input, sort, and return the array in descending order. 
For example, if the array is [3,2,7,4,6,9] the result should be [9,7,6,4,3,2]. */

function sortArray(array) {
  for (i = 0; i < array.length; i++) {
    let max = i;
    for (j = i + 1; j < array.length; j++) {
      if (array[i] < array[j]) {
        max = j;
      }
    }

    if (max !== i) {
      array[i] = array[i] + array[max];
      array[max] = array[i] - array[max];
      array[i] = array[i] - array[max];
    }
  }
  return array;
}

const array = [3, 2, 7, 4, 6, 9];
console.log("Sorted Array:", sortArray(array));
