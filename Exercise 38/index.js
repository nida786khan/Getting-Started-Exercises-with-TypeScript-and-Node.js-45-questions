"use strict";
function describe_city(city, country = "Unknown Country") {
    console.log(`${city} is in ${country}.`);
}
// calling the function for three different cities 
describe_city("Karachi", "Pakistan");
describe_city("New York"); // using the default country value
describe_city("Berlin", "Germany");
