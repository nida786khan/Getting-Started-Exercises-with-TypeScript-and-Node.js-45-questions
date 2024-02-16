/*Intentional Error: If you haven’t received an array index error in one of your programs yet, 
try to make one happen. Change an index in one of your programs to produce an index error. 
Make sure you correct the error before closing the program.

*/

//function to create a fruit oject
function createFruit(name: string, color: string, taste: string) {
  return{
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
  createFruit("Strawberry","Red", "Sweet"),
  createFruit("Grapes", "Purple/Green","Sweet"),
];

// Access an invalid index
const invalidIndex = 10; // there are only 5 element is the array, so this will cause an error
console.log(`Fruit at index ${invalidIndex}:`, fruits
[invalidIndex]);

// print the fruits
fruits.forEach((fruit) => {
   console.log(`Name: ${fruit.name}, Color: ${fruit.color}, Taste: ${fruit.taste}`);
}); 

export{};