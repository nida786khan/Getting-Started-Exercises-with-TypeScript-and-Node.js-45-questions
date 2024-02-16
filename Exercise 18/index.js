"use strict";
//step 1:
let travelDestinations = ["Tokyo", "Paris", "Madina Munawara", "Cayman", "St Maatin"];
//step 2:
console.log("Original Order:");
console.log(travelDestinations);
// step 3: Print your array in alphabetical order without modifying the actual list.
console.log("\n Alphabetical order without modifying the actual list");
console.log([...travelDestinations].sort());
// step 4: Show that your array is still in its original order by printing it.
console.log("\nShowing array is still in its original order");
console.log(travelDestinations);
// step 5: Print your array in reverse alphabetical order without changing the order of the original list.
console.log("\n Reverse Alphabetical order without modifying the actual list");
console.log([...travelDestinations].sort().reverse());
// step 6: Show that your array is still in its original order by printing it again.
console.log("\nShowing array is still in its original order");
console.log(travelDestinations);
// step 7:  Reverse the order of your list. Print the array to show that its order has changed.
console.log("\nReverse order");
travelDestinations.reverse();
console.log(travelDestinations);
//step 8: • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log("\nBack to Original");
travelDestinations.reverse();
console.log(travelDestinations);
