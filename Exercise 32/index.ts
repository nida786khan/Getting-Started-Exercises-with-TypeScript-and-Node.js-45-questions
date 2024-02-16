/*Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone
 has a unique username.
• Make a list of five or more usernames called current_users.

• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also
 in the current_users list.

• Loop through the new_users list to see if each new username has already been used. If it has, 
print a message that the person will need to enter a new username. If a username has not been used,
 print a message saying that the username is available.

• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.*/



// step 1 arrays
const current_users: string[] = ["Kamran","Ali","Burhan","Asad","Asif","Ahmed"];

const new_users: string[] = ["asif","kamran","kashif","Aisha","Ali"];
// .map
/*const num1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(num1)
const num2: number[] = num1.map(i => i ** 2)
console.log(num2)*/

// step 2 function

function checkUserName(current_users: string[], new_users: string[]): void
{
  //1st step of fuction
  const lowercasedCurrentUsers = current_users.map(user => user.toLowerCase());
  // 2nd step of function
  for (const newUser of new_users){
    const lowercasedCurrentUsers = newUser.toLowerCase();
    if (lowercasedCurrentUsers.includes(lowercasedCurrentUsers)){
      console.log(`Username "${newUser}" is already taken. 
      Please enter anew username.`);
    }else {
      console.log(`Username "${newUser}" is available.`);
    }
  }
}
// console.log(current_users)
// Test the function

checkUserName(current_users, new_users);
