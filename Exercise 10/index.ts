/*Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each.
 If you don’t have anything specific to write because your programs are too simple at this point,
  just add your name and the current date at the top of each program file.
 Then write one sentence describing what the program does.*/


let personName: string = "Nida Ajab Khan";

let lowercaseName: string = personName.toLocaleLowerCase();
let uppercaseName: string = personName.toUpperCase();

let words: string[] =personName.split(" ");
let titleCaseName: string = ""
for (let i = 0; i < words.length; i++ ) {
  titleCaseName += words[i].charAt(0).toLocaleUpperCase() + words
};
console.log(lowercaseName);
console.log(uppercaseName);
console.log(titleCaseName);
