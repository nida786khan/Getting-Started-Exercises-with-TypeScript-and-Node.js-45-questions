"use strict";
//function to create a fruit oject
function createFruit(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
// Create an array of fruits
const fruits = [
    createFruit("Apple", "Red", "Sweet"),
    createFruit("Banaba", "Yellow", "Sweet"),
    createFruit("Orange", "Orange", "Citrusy"),
    createFruit("Strawberry", "Red", "Sweet"),
    createFruit("Grapes", "Purple/Green", "Sweet"),
];
// Access an invalid index
const invalidIndex = 10; // there are only 5 element is the array, so this will cause an error
console.log(`Fruit at index ${invalidIndex}:`, fruits[invalidIndex]);
// print the fruits
fruits.forEach((fruit) => {
    console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
});
