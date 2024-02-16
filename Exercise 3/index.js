"use strict";
// step 1 show  in lowercase:
let PersonName = "Nida Ajab Khan";
let lowercaseName = PersonName.toLowerCase();
console.log(lowercaseName);
// step 2 show name in uppercase:
let uppercaseName = PersonName.toUpperCase();
console.log(uppercaseName);
// step 3 show name titlecase
let words = PersonName.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
