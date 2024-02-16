/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message 
that should be printed on the shirt. The function should print a sentence summarizing 
the size of the shirt and the message printed on it. Call the function.

*/


const make_shirt = (size: string, messsage: string) 
:void =>
{
  console.log(`Size: ${size}, Message: '${messsage}'`);
 
}

// Call the function
// call the function with the size and the message variables
let size: string = "medium";
let messsage: string = "TypeScript Insights with Nida khan"

make_shirt(size, messsage);
//  directly call the function
make_shirt("Laege", "TypeScript Insights");