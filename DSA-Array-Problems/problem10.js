// Problem 10: Products

/*
Given an array of numbers, write an algorithm 
that outputs an array where each index is the 
product of all the numbers in the input array 
except for the number at each current index. 
See the following example input and output.

Input:[1, 3, 9, 4]
Output:[108, 36, 12, 27]
*/

function products(array) {
  let newArr = [];

  //   iterate through loop to get first number at specified index
  for (let i = 0; i < array.length; i++) {
    let current = i;
    // set answer to 1 (if set to 0, will always end up with 0)
    let answer = 1;
    // iterate through loop again to get 2nd number
    for (let j = 0; j < array.length; j++) {
      // check if current index not equal to second
      if (current !== j) {
        // multiply numbers not equal to current and store in answer variable
        answer *= array[j];
      }
    }
    // push answer to new array
    newArr.push(answer);
  }

  return newArr;
}

console.log(products([1, 3, 9, 4]));

// This is Polynomial time O(n^2)
