/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. Call show_magicians() with each array to 
show that you have one array of the original names and one array with the Great added to each magician’s name.*/



// Array of magician's names
const magicianNames: string[] = ["Harry Porter","David copperfield","Hermione Granger","Professor Albus Dumbledore","Ron Weasley"];

function showMagicions(magicians: string[]): void {
  for (const magician of magicians) {
   console.log(magician);
  }
}

function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = magicians.map(magician => `the
  Great ${magician}`);
  return greatMagicians;
}

// Modify the array to add "the Great" to each magician's name
const greatMagicianNames: string[] = make_great(magicianNames);

// Call the function to show the original megician's names
console.log("Original Magicians:");
showMagicions(magicianNames);

// Call the function to show the great madician's names
console.log("\nGreat Magicians");
showMagicions(greatMagicianNames);
