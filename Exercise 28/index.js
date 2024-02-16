"use strict";
// If the person is less than 2 years old, print a message that the person is a baby.
let age = 25;
if (age < 2) {
    console.log(`Age is ${age},The person is a baby.`);
}
else if (age < 4) {
    console.log(`Age is ${age},The person is a tddler.`);
}
else if (age < 13) {
    console.log(`Age is ${age},The person is a kid.`);
}
else if (age < 20) {
    console.log(`Age is ${age},The person is a teenager.`);
}
else if (age < 65) {
    console.log(`Age is ${age},The person is a adult.`);
}
else {
    console.log(`Age is ${age},The person is an elder.`);
}
// to test with different age
console.log(`2nd test with different age`);
age = 12;
if (age < 2) {
    console.log(`Age is ${age},The person is a baby.`);
}
else if (age < 4) {
    console.log(`Age is ${age},The person is a tddler.`);
}
else if (age < 13) {
    console.log(`Age is ${age},The person is a kid.`);
}
else if (age < 20) {
    console.log(`Age is ${age},The person is a teenager.`);
}
else if (age < 65) {
    console.log(`Age is ${age},The person is a adult.`);
}
else {
    console.log(`Age is ${age},The person is an elder.`);
}
