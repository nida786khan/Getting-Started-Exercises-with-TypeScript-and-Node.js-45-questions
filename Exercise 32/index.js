"use strict";
// step 1 arrays
const current_users = ["Kamran", "Ali", "Burhan", "Asad", "Asif", "Ahmed"];
const new_users = ["asif", "kamran", "kashif", "Aisha", "Ali"];
// .map
/*const num1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(num1)
const num2: number[] = num1.map(i => i ** 2)
console.log(num2)*/
// step 2 function
function checkUserName(current_users, new_users) {
    //1st step of fuction
    const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
    // 2nd step of function
    for (const newUser of new_users) {
        const lowercasedCurrentUsers = newUser.toLowerCase();
        if (lowercasedCurrentUsers.includes(lowercasedCurrentUsers)) {
            console.log(`Username "${newUser}" is already taken. 
      Please enter anew username.`);
        }
        else {
            console.log(`Username "${newUser}" is available.`);
        }
    }
}
// console.log(current_users)
// Test the function
checkUserName(current_users, new_users);
