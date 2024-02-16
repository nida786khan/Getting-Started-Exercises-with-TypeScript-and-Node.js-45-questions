/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/


// version 1 (run the if block)
console.log('\n1st version od code where else')
let alien_color: string = 'green';
if (alien_color === 'green')
{
  console.log('Congratulation! You just earned 5 points for shooting the aliren.');
} else {
  console.log('Congratulation! You just earned 10 points for shooting the alien.');
}

// version 2 (run the else block.)
console.log('\n2nd version od code where else')
alien_color = 'blue';

if (alien_color === 'green') 
{
  console.log('Conratulation! You just earned 5 points for shooting the alien.');
} else {
  console.log('Conratulation! You just earned 5 points for shooting the alien.');
}

export{}