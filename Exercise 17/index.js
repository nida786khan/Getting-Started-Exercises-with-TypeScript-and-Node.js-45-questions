"use strict";
let guestList = [
    'Zia Khan',
    'Jahanzaib Tayab',
    'Abid Shirwani',
    'Abid shah',
    'Mian Asif',
    'Ali Phul'
];
// message about inviting only two people.
console.log(`I can invite only two people for dinner`);
// 2nd step remove guest from th list untill  only two name rmain.
while (guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest}, I cant invite you to dinner`);
}
//  Print a message to each of the two people still on your list, letting them know they’re still invited.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, you are still invited to dinner!`);
}
// Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
guestList.pop();
guestList.pop();
// print emty string
console.log(`Guest list after dinner:`, guestList);
