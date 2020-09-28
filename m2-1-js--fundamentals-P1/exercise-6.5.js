function exercise6_5() {
  // Exercise 6.5
  //
  // Write a loop that will iterate from 0 to 10.
  // For each iteration, it should check whether a number is even or odd
  // and display that state along with the number.
  // e.g.
  // 0 is even
  // 1 is odd
  // 2 is even
  // ...
  // many other possibilities here.
  //
  // Use interpolation to build your output string
  // e.g. `${number} is odd`
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  for (let x = 0; x < 11; x++) {
    let type = "odd";

    if (x % 2 === 0) {
      type = "even";
    }

    console.log(`${x} is ${type}`);
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
module.exports = exercise6_5;
