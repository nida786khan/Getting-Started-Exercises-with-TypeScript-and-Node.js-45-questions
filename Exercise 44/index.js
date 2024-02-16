"use strict";
function makeSanswich(...items) {
    console.log("Sandwich Summary:");
    if (items.length === 0) {
        console.log("  - You ordered an empty sandwich. Please add some itme.");
    }
    else {
        items.forEach((item, i) => {
            console.log(`  ${i + 1}. ${item}`);
        });
    }
    console.log("\n");
}
// Call the funtion with different numbers of arguments
makeSanswich();
makeSanswich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
makeSanswich("Ham", "Cheese");
makeSanswich("Peanut Butter", "Jelly", "Banana", "Honey");
