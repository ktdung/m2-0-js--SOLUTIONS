function exercise10() {
  // Exercise 10
  //
  // Write a loop that makes seven calls to console.log to
  // output the following triangle:
  // #
  // ##
  // ###
  // ####
  // #####
  // ######
  // #######
  //
  // Write code between the lines (below)
  // -----------------------------------------------------------------
  for (let i = 0; i < 7; i++) {
    let line = "#";
    for (let x = 1; x <= i; x++) {
      line += "#";
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
module.exports = exercise10;
