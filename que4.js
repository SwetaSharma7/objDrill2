// Q4 Find all users with masters Degree.

const users = require('./users');

const mastersDegreeUsers = Object.keys(users).filter(userName => users[userName].qualification === "Masters");
console.log("Q4:", mastersDegreeUsers);
