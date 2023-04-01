function isPalindrome(word) {
  // Write your algorithm here
}
//function receive argument and return true
//return false if not
//declare function
//callback for returning true or fals
//testing with example

/* 
  Add your pseudocode here
*/
function isPalindrome(s) {
  return s === s.split('').reverse().join('');
}

/*
  Add written explanation of your solution here
*/
//create function
//return true or false
//test function
// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  //testing with provided examples
  console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("robot"));  // false
console.log(isPalindrome("madam"));  // true
console.log(isPalindrome("robot"));  // false

  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
