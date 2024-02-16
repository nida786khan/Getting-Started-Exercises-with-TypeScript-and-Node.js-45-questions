"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Non-empty array case
let userNames = ['admin', 'Ali Phull', 'Muhammad Kamran', 'Jawad Ahmed', 'Aqib Khan'];
//functional case
function greetUsers(usernames) {
    if (usernames.length === 0) {
        console.log('we need to find some users!');
        return;
    }
    for (const username of usernames) {
        if (username.toLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a ststus report?');
        }
        else {
            console.log(`Hello ${username},thank you for logging in again.`);
        }
    }
}
console.log(`for non empty username:\n`);
greetUsers(userNames);
// to make array empty we just assing an empty array to userName
userNames = [];
console.log(`\n\n for empty username:\n`);
greetUsers(userNames);
