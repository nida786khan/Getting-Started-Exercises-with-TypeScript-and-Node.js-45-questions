"use strict";
const str1 = "Hello";
const str2 = "hello";
console.log(str1 === str2); // False
console.log(str1 !== str2); //true
// Test using the lower case function
const text1 = "Hello World";
const text2 = "hello world";
console.log(text1.toLowerCase() === text2); // true
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1 = 10;
const num2 = 5;
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); //false
console.log(num1 >= num2); // true
console.log(num1 <= num2); // false
// Tests using "and" and " or" operators
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y < z); // true, both conditions are ture
console.log(x < y || y > z); // true, at least one
console.log(x > y && y < z); // false, both conditions are false
console.log(x > y || y > z); // false, both conditions are false
// Test whether an item is in an array 
const fruits = ['apple', 'banana', 'orange', 'grape'];
console.log(fruits.includes('banana')); // true
console.log(fruits.includes('kiwi')); // false
// test whether an item is not inan array
const colors = ['red', 'green', 'blue', 'yellow'];
console.log(!colors.includes('purple')); // true
console.log(!colors.includes('green')); // false
