// Problem 8: Merge arrays

/*
Imagine you have 2 arrays which have already been sorted. 
Write an algorithm to merge the 2 arrays into a single array, 
which should also be sorted.

Input:[1, 3, 6, 8, 11] and [2, 3, 5, 8, 9, 10]
Output:[1, 2, 3, 3, 5, 6, 8, 8, 9, 10, 11]
*/

function mergeArrays(arr1, arr2) {
  let newArr = [];

  newArr = arr1.concat(arr2);
  newArr = newArr.sort((a, b) => a - b); // when passing (a, b) => a - b, telling .sort() function to sort the numbers in ascending order.
  /*
    if it returns a negative value, the value in a will be ordered before b.
    if it returns 0, the ordering of a and b won’t change.
    if it returns a positive value, the value in b will be ordered before a.
    */

  return newArr;
}

console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
