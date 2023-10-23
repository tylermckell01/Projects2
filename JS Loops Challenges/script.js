// Write a program that counts to 10 by 2's

// function counter(x) {
//   while (x < 11) {
//     if (x % 2 === 0) {
//       console.log(x);
//     }
//     x += 2;
//   }
// }
// counter(0);

// Write a program that extracts values form an array at specific indices and returns the values in a new array.
// Here is an example of potential output:
// removeByIndex[‘a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [1, 5]) => ['b', 'f']]

//first attempt
// function removeByIndex(array, indices) {
//   let newArray = [];

//   let splicedIndices = array.splice(indices);

//   newArray = newArray.push(splicedIndices);

//   return newArray;
// }

// removeByIndex(["a", "b", "c", "d", "f", "f", "e", "f"], [1, 5]);

//finished attempt
// function removeByIndex(array, indices) {
//   let splicedIndices = [];

//   for (let index of indices) {
//     splicedIndices.push(array.splice(index, 1)[0]);
//   }
//   return splicedIndices;
// }

// console.log(removeByIndex(["a", "b", "c", "d", "f", "f", "e", "f"], [1, 5]));

// Write a program that converts a number into an array of numbers. Ensure each element in the array is a number data type and NOT a string data type.
// Here is an example of potential output: numToArray(12345) => [1, 2, 3, 4, 5]

// first way (only works if parameter is passed as a string)
// function numToArray(num) {
//   let newArray = [];

//   for (let x of num) {
//     newArray.push(x);
//   }
//   return newArray;
// }
// console.log(numToArray("12345"));

// second way
// function numToArray(num) {
//   let convString = String(num);
//   let newArray = [];

//   for (let x of convString) {
//     newArray.push(Number(x));
//   }
//   return newArray;
// }
// console.log(numToArray(12345));

// Write a program to create a new matrix of arrays from two arrays of numbers and strings.

// function createMatrix(arr1, arr2) {
//   let arrays = [];

//   for (let x in arr1) {
//     arrays.push(x);
//   }
//   for (let y in arr2) {
//     arrays.push(y);
//   }
// }

// console.log(createMatrix([1, 2, 3], ["a", "b", "c", "d"]));
const arr1 = [1, 2, 3];

const arr2 = ["a", "b", "c", "d"];

const results = [];

function createMatrix(arr1, arr2) {
  for (const num of arr1) {
    for (const item of arr2) {
      results.push([num, item]);
      results.push([item, num]);
    }
  }
  return results;
}

console.log(createMatrix(arr1, arr2));
