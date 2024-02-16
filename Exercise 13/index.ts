/*Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car,
 and make a list that stores several examples. Use your list to print a series of statements about
  these items, such as “I would like to own a Honda motorcycle.”*/



let favoriteTransporttion: Array<[transport: string, brand: string]> = []
favoriteTransporttion.push(["motercycle","Honda"])
favoriteTransporttion.push(["car","Toyota"])
favoriteTransporttion.push(["bicycle","Sohrab"])

// consol.log(favoriteTransportation)
// I would like to own a Honda motorcycle.
// using for each loop to print a series of statements

favoriteTransporttion.forEach(([tranport, brand]) => 
{console.log(`I would like to own a ${brand} ${brand} ${tranport}.`) }
) 