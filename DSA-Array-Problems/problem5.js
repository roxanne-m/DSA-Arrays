// Problem 5: URLify a String

/*
A common mistake users make when they type in 
an URL is to put spaces between words or letters. 
A solution that developers can use to solve this 
problem is to replace any spaces with a %20. 
Write a method that takes in a string and replaces 
all its empty spaces with a %20. Your algorithm can 
only make 1 pass through the string. Examples of input 
and output for this problem can be:

Input: tauhida parveen

Output: tauhida%20parveen

Input: www.thinkful.com /tauh ida parv een

Output: www.thinkful.com%20/tauh%20ida%20parv%20een
*/

const URLify = function (url) {
  // set newUrl variable to empty string
  let newUrl = '';

  // for loop that iterates through url argument passed in
  for (let i = 0; i < url.length; i++) {
    // conditional if statement checking if at any index in url argument contains a space, replace with '%20'
    // else, add next letter at designated index
    if (url[i] === ' ') {
      newUrl += '%20';
    } else {
      newUrl += url[i];
    }
  }
  return newUrl;
};

console.log(URLify('tauhida parveen'));
console.log(URLify('www.thinkful.com /tauh ida parv een'));

// This function is Linear Time O(n)