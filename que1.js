// Q1 Find all users who are interested in playing video games.
const users = require('./users');

const videoGameUsers = Object.keys(users).filter(userName => users[userName].interests.includes("Playing Video Games"));
console.log("Q1:", videoGameUsers);
