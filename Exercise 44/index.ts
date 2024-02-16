/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 The function should have one parameter that collects as many items as the function call provides,
  and it should print a summary of the sandwich that is being ordered. Call the function three times,
   using a different number of arguments each time.

*/


function makeSanswich(...items: string[]): void {
  console.log("Sandwich Summary:");
  if (items.length === 0) {
    console.log("  - You ordered an empty sandwich. Please add some itme.");
  } else {
    items.forEach((item, i) => {
      console.log(`  ${i + 1}. ${item}`);
    });
  }
  console.log("\n");
}

// Call the funtion with different numbers of arguments
makeSanswich()
makeSanswich("Turkey","Lettuce","Tomato","Mayonnaise");
makeSanswich("Ham","Cheese");
makeSanswich("Peanut Butter","Jelly","Banana","Honey")
