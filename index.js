function isPalindrome(word) {
  // Write your algorithm here
  //iterate from the beginning to the middle
  for (let i = 0; i < word.length/ 2; i++){
    //check if first and last word is the same
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
  }
  }
  return true;
}

/* 
  Add your pseudocode here
  if word === reverse.word => true { (is palindrome)}
  if word  === reverse.word => false{{is not palindrome}}
  convert word to array
  reverse array values
  convert reversed array to Word
  compare word with reversedWord
*/

/*
  Add written explanation of your solution here
  function reverseString converts word to array then the array is reversed then turned back to a string(word
    ) the function is allocated a variable called  reversedword which we compare it with the word to
    find whether string is palindrome on not. 
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;