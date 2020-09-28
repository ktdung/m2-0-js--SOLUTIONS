// Exercise 1.4
//
// Write a function that accepts a name and returns the name as first name and last name.
// Remove the middle name, if there is one.
// - This function should still work if there is no middle name.
// - If the string has only one name, e.g. "Adele", it should return that name
//
// Example:
// shortenName(Morty Antoine Smith") should return "Morty Smith"
//
// Edit only the code between the lines (below)
// -----------------------------------------------------------------
function removeMiddleName(string) {
  // complete the function
  const arrOfNames = string.split(" ");
  return `${arrOfNames[0]}${
    arrOfNames.length > 1 ? ` ${arrOfNames[arrOfNames.length - 1]}` : ""
  }`;
}
// -----------------------------------------------------------------
// Edit only the code between the lines (above)
//
//
//

// Call the function to test your code.
console.log(removeMiddleName("Morty Antoine Smith"));

// Create more test examples.

// This is needed for automated testing (more on that later)
module.exports = removeMiddleName;
