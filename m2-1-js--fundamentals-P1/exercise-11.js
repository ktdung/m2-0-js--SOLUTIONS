function exercise11() {
  // Exercise 11
  //
  // Write a program that creates a string that represents an 8×8 grid,
  // using newline characters to separate lines. At each position of the grid
  // there is either an "_" or a "#" character. The characters should form a chessboard.
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  // #_#_#_#_
  // _#_#_#_#
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  for (let i = 0; i < 8; i++) {
    let line = "";

    if (i % 2 === 0) {
      line += "#";

      for (let x = 1; x < 8; x++) {
        if (x % 2 === 0) {
          line += "#";
        } else {
          line += "_";
        }
      }
    } else {
      line += "_";

      for (let x = 1; x < 8; x++) {
        if (x % 2 === 0) {
          line += "_";
        } else {
          line += "#";
        }
      }
    }
    console.log(line);
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
module.exports = exercise11;
