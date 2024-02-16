"use strict";
function makeShirt(size = "Large", message = "I love TypeScript") {
    return console.log(`Size: ${size}, Message: '${message}'`);
}
// Large shirt wiyh default message 
makeShirt(); // Output: Size: Large, Message: 'I love Typescript'
//Muedium shirt with default message 
makeShirt("Medium"); // Output: Size: Medium, Message: ' I love Typescript'
// Ustom shirt with a differet message and size 
makeShirt("Small", "Please Subscribe TypeScript insights!"); // Output: Size: Small, Message: 'Please Subscribe TypeScript insights '
