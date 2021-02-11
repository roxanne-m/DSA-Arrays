// Problem 9: Remove Characters

/*
Write an algorithm that deletes given characters from a string. 
For example, given a string of "Battle of the Vowels: Hawaii vs. Grozny" 
and the characters to be removed are "aeiou", the algorithm should 
transform the original string to "Bttl f th Vwls: Hw vs. Grzny". 
Do not use Javascript's filter, split, or join methods.

Input:'Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'
Output: 'Bttl f th Vwls: Hw vs. Grzny'
*/

function removeChar(sentence, lettersRemoved) {
  let newSentence = '';
  let add = true;

  //   Iterate through sentence letters & sets add to true
  for (let i = 0; i < sentence.length; i++) {
    add = true;
    // Nested for loop that iterates through lettersRemoved
    for (let j = 0; j < lettersRemoved.length; j++) {
      // conditional statement checking is first letter in sentence is equal to first letter in lettersRemoved
      // If true, set add to false
      if (sentence[i] === lettersRemoved[j]) {
        add = false;
      }
    }
    // If add is true, add letters from sentence at specified index to new array
    if (add) {
      newSentence += sentence[i];
    }
  }

  return newSentence;
}

console.log(removeChar('Battle of the Vowels: Hawaii vs. Grozny', 'aeiou'));
console.log(removeChar('Apples are amazingly atrocious', 'auioe'));

// This is a O(n^2)
