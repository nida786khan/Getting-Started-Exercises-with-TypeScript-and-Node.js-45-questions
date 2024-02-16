"use strict";
// Array of magician's names
const magicianNames = ["Harry Porter", "David copperfield", "Hermione Granger", "Professor Albus Dumbledore", "Ron Weasley"];
function showMagicions(magicians) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
function make_great(magicians) {
    const greatMagicians = magicians.map(magician => `the
    Great ${magician}`);
    return greatMagicians;
}
// Modify the array to add "the Great" to each magician's name
const greatMagicianNames = make_great(magicianNames);
// Call the function to show the original megician's names
console.log("Original Magicians:");
showMagicions(magicianNames);
// Call the function to show the great madician's names
console.log("\nGreat Magicians");
showMagicions(greatMagicianNames);
