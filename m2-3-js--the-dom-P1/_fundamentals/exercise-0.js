// Exercise 0
//
// Part 1 - Write
// ---------------
// Write a function accepts a string as an argument and returns the number of letters in that string
//
// - If it's an empty string (''), return undefined.
// - If it's not a string, return undefined.

const strLength = (str) => {
  // Your code here
  if (typeof str !== "string" || str.length === 0) {
    return undefined;
  }
  return str.length;
};

// Part 2 - Test
// --------------
// Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

// We need to export the function in order for our unit test to have access to it.
module.exports = strLength;
