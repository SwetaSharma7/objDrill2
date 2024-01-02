// Q5 Group users based on their Programming language mentioned in their designation.

const users = require('./users');

const groupedUsers = {};
Object.keys(users).forEach(userName => {
    const programmingLanguage = users[userName].designation.split(" ")[2];
    if (!groupedUsers[programmingLanguage]) {
        groupedUsers[programmingLanguage] = [];
    }
    groupedUsers[programmingLanguage].push(userName);
});

console.log("Q5:", groupedUsers);
