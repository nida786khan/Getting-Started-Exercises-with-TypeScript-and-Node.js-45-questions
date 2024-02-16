"use strict";
let guestList = [
    "Nida Khan",
    "Abid Shirwani",
    "Jawad Ahmed",
];
// Exercise 16  Solution
//step 1 informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`Hello, ${guest}, we found a bigger dinner table.`);
}
// step 2 Add a new guest to the beginning of Array.
let newGuestAtBeginning = "Ali Phool";
guestList.unshift(newGuestAtBeginning);
console.log(guestList);
// 3rd step add one guest to middle of array 
let newGuestInMiddle = "Mian Asif";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
//console.log(guestList)
// 4th step use append() to add new guest to the end of your list
let newGuestAtEnd = "Muhammad Ali";
guestList.push(newGuestAtEnd);
//console.log(guestList)
// Final step Print a new set of invitation message
console.log("New set of invitation message:");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner`);
}
