/* Problem 7: Filtering an Array */

/*
Imagine you have an array of numbers. 
Write an algorithm to remove all numbers 
less than 5 from the array. DO NOT use 
Array's built-in .filter() method here; 
write the algorithm from scratch.
*/

const filter = function(array, number){
    // Create empty array to store only numbers that meet the condition
    let newArray = [];
    // for loop that iterates through entire array 
    for(let i = 0; i < array.length; i++){
        if(array[i] >= number){
            newArray.push(array[i])
        }
    }
    return newArray;
}

console.log(filter([2, 4, 6, 8 , 10], 5));

// This function is Linear Time O(n)