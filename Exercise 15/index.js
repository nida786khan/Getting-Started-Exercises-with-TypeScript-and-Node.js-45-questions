"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guestList = void 0;
let guestList = [
    "Nida Khan",
    "Jahanzaib Khan",
    "Abrar Ahmed Khan",
];
exports.guestList = guestList;
// step 1. Print the name of person who can't make it.
let guestHowCantMakeIt = "Abrar Ahmed Khan";
console.log(`${guestHowCantMakeIt} can't make it to Dinner`);
//step 2. Replace the name of guest who cant make it.
let NewGuest = "Nida Khan";
let indexOfguestHowCantMakeIt = guestList.indexOf(guestHowCantMakeIt);
// console.log(indexOfguestHowCantMakeIt)
if (indexOfguestHowCantMakeIt !== -1) {
    guestList[indexOfguestHowCantMakeIt] = NewGuest;
}
//console.log(guestList[2])
// step 3. Print a second set of invitation messages
console.log("Second set of invitation messages");
guestList.forEach((guest) => {
    console.log(`Dear ${guest}, you are invited to dinner.`);
});
