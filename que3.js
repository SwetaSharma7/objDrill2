// Q3 Sort users based on their seniority level 
//    for Designation - Senior Developer > Developer > Intern
//    for Age - 20 > 10

const users = require('./users');

const sortedUsers = Object.keys(users).sort((a, b) => {
    const seniorityOrder = {
        "Senior Developer": 1,
        "Developer": 2,
        "Intern": 3
    };

    if (seniorityOrder[users[a].designation] !== seniorityOrder[users[b].designation]) {
        return seniorityOrder[users[a].designation] - seniorityOrder[users[b].designation];
    }

    return users[a].age - users[b].age;
});

console.log("Q3:", sortedUsers);
