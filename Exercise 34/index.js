"use strict";
// Define the array of favorite pizzas
const favoritePizzas = ['Pepperoni', 'Marghrita', 'BBQ Chicken'];
// Print the name of each pizza using a for loop
console.log("My favorite pizzas are:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(favoritePizzas[i]);
}
// Print a sentence for each pizza
console.log("\nI like these pizzas:");
for (let i = 0; i < favoritePizzas.length; i++) {
    console.log(`I like  ${favoritePizzas[i]} "pizza.`);
}
// Print an additional sentence about how much I like pizza
console.log(`\nI really love pizza!`);
