"use strict";
let favoriteTransporttion = [];
favoriteTransporttion.push(["motercycle", "Honda"]);
favoriteTransporttion.push(["car", "Toyota"]);
favoriteTransporttion.push(["bicycle", "Sohrab"]);
// consol.log(favoriteTransportation)
// I would like to own a Honda motorcycle.
// using for each loop to print a series of statements
favoriteTransporttion.forEach(([tranport, brand]) => { console.log(`I would like to own a ${brand} ${brand} ${tranport}.`); });
