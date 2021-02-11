/* Problem 7: Max sum in the array */

/*
You are given an array containing positive 
and negative integers. Write an algorithm 
which will find the largest sum in a continuous 
sequence.

Input: [4, 6, -3, 5, -2, 1]
Output: 12

Kadane's Algorithm
*/

function maxSum(array) {
  max_so_far = 0;
  max_ending_here = 0;

  for (let i = 0; i < array.length; i++) {
    max_ending_here += array[i];

    if (max_so_far < max_ending_here) {
      max_so_far = max_ending_here;
    }
    if (max_ending_here < 0) {
      max_ending_here = 0;
    }
  }
  return max_so_far;
}

console.log(maxSum([4, 6, -3, 5, -2, 1]));

/*
look for all positive contiguous segments of the array (max_ending_here is used for this). 
And keep track of maximum sum contiguous segment among all positive segments (max_so_far is used for this). 
Each time we get a positive-sum compare it with max_so_far and update max_so_far if it is greater than max_so_far 
*/
