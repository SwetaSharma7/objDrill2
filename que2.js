// Q2 Find all users staying in Germany.
const users = require('./users');

const germanyUsers = Object.keys(users).filter(userName => users[userName].nationality === "Germany");
console.log("Q2:", germanyUsers);
