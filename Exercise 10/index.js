"use strict";
let personName = "Nida Ajab Khan";
let lowercaseName = personName.toLocaleLowerCase();
let uppercaseName = personName.toUpperCase();
let words = personName.split(" ");
let titleCaseName = "";
for (let i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toLocaleUpperCase() + words;
}
;
console.log(lowercaseName);
console.log(uppercaseName);
console.log(titleCaseName);
