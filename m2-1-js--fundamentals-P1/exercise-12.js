const exercise13 = require("./exercise-13");

function exercise12() {
  // Exercise 12
  //
  // Write a program that generates a list of all prime numbers from 1 and 200.
  // Prime numbers have exactly two factors.
  // A prime number is a number that is ONLY divisible by 1 and itself.
  //
  // 6 -> NOT prime (2 * 3)
  // 7 -> PRIME (can only be divided by 1 and 7, no other numbers)
  // 12 -> NOT prime (3 * 4, 2 * 6)
  // 37 -> PRIME ()
  //
  //
  // EXPECTED OUTPUT: [2, 3, 5, 7, 11, 13, ...]
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  for (let x = 2; x < 201; x++) {
    if (x < 4) {
      console.log(x);
    } else if (
      x % 2 !== 0 &&
      x % 3 !== 0 &&
      x % 5 !== 0 &&
      x % 7 !== 0 &&
      x % 11 !== 0 &&
      x % 13 !== 0
    ) {
      console.log(x);
    }
  }
  // -----------------------------------------------------------------
  // Write code between the lines (above)
  //
  //
  //
  //
  //
  //
}
module.exports = exercise12;
