function isPalindrome(word) {
  // Write your algorithm here
  const length = word.length;

  // Iterate through half of the word
  for (let i = 0; i < length / 2; i++) {
    if (word[i] !== word[length - 1 - i]) {
      return false; // If characters don't match, it's not a palindrome
    }
  }

  return true; // If all characters match, it's a palindrome
}

console.log(isPalindrome("abba")); 
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("a")); 
console.log(isPalindrome("robot")); 
console.log(isPalindrome("ab"));

/* 
  add your pseudocode here
 */



  /*
    Add written explanation of your solution here
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

