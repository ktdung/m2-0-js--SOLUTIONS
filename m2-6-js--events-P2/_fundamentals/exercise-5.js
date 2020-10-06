// Exercise 1
//
// 1. Write a function that accepts the object below, a key and a value and returns the objects that contain the same key/value pair
// e.g. getData(staffMembers, 'title', 'Web Developer II') returns
// [
//   {
//     name: "Jane Smith",
//     title: "Web Developer II",
//     skillLevels: {
//       javascript: 7,
//       python: 4,
//       sql: 6,
//     },
//   },
// ];

// - If the provided key is any of the skillLevel items, you should return all objects that have skill levels at least that high.
// e.g. getdata(staffMembers, 'sql', 7) returns
// [
//   {
//     name: "Steve Rogers",
//     title: "Database Admin",
//     skillLevels: {
//       javascript: 7,
//       python: 4,
//       sql: 9,
//     },
//   },
//   {
//     name: "Chuck Taylor",
//     title: "Web Developer III",
//     skillLevels: {
//       javascript: 8,
//       python: 7,
//       sql: 8,
//     },
//   },
// ];

const staffMembers = [
  {
    name: "Jane Smith",
    title: "Web Developer II",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 6,
    },
  },
  {
    name: "Frank Castle",
    title: "Web Developer I",
    skillLevels: {
      javascript: 4,
      python: 4,
      sql: 3,
    },
  },
  {
    name: "Steve Rogers",
    title: "Database Admin",
    skillLevels: {
      javascript: 7,
      python: 4,
      sql: 9,
    },
  },
  {
    name: "Chuck Taylor",
    title: "Web Developer III",
    skillLevels: {
      javascript: 8,
      python: 7,
      sql: 8,
    },
  },
  {
    name: "Thor Odinson",
    title: "Web Intern",
    skillLevels: {
      javascript: 4,
      python: 3,
      sql: 6,
    },
  },
];

const getData = (arr, key, val) => {
  // return something
  if (key === "name" || key === "title") {
    return arr.filter((employee) => employee[key] === val);
  } else {
    return arr.filter((employee) => employee.skillLevels[key] >= val);
  }
};

// 2. Do a console.log to verify your function.

// 3. Test your function.
// Look for the corresponding exercise file in the __tests__ folder.
// Add some test cases in the test. The first one is done for you.

module.exports = { getData, staffMembers };
