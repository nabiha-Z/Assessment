/*Write a function that will take an array of numbers and return the number most repeated in the array with how many times it was repeated. 
For example, if the array is [4,3,5,6,4,7,9,2,4,6,3,4,6,3,4,8,5,1,5] the function should return 4 is repeated 5 times. */

function maxRepeatedNumber(array) {
  let dict = {};

  for (let i = 0; i < array.length; i++) {
    if (dict.hasOwnProperty(array[i])) {
      dict[array[i]] += 1;
    } else {
      dict[array[i]] = 1;
    }
  }

  let maxNumber = null;
  let maxCount = -1;

  for (let num in dict) {
    if (dict[num] > maxCount) {
      maxNumber = num;
      maxCount = dict[num];
    }
  }

  return { maxNumber, maxCount };
}

maxFrequency = maxRepeatedNumber([
  4, 3, 5, 6, 4, 7, 9, 2, 4, 6, 3, 4, 6, 3, 4, 8, 5, 1, 5,
]);
console.log(
  "Max Frequency: ",
  maxFrequency["maxNumber"],
  "is repeated",
  maxFrequency["maxCount"],
  "times"
);
