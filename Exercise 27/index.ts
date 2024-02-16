/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.
 Write three versions of this program, making sure each message is printed for the appropriate color alien.*/


// version 1 - 1st version where align color is green
console.log('1st version where align color is green')
let alien_color: string = 'green';

if (alien_color === 'green')
{
  console.log('Congratulations! You just earned 5 points.');
}else if (alien_color === 'yellow')
{
  console.log('Congratulations! You just earned 10 points.');
}else if (alien_color === 'red') {
  console.log('Congratulations! You just earned 15 points.');
}else {
  console.log('Unknown alien color.');
}

//version 2 - where align color is yellow
console.log('2nd version where align color is yellow')

alien_color ='yellow';
if(alien_color ==='green') 
{
  console.log('Congratulations! You just earned 5 point.');
}
else if (alien_color === 'yellow') 
{
  console.log('Congratulations! You just earned 10 point.');
}else if (alien_color === 'red') 
{
  console.log('Congratulations! You just earned 15 point.');
}else {
  console.log('Unknow alien color.');
}
// 3rd version where align color is red
console.log(`3rd version wherealign color is red`)
alien_color = 'red';

if (alien_color ==='green') {
  console.log('Congratulations! You just earned 5 points.');
}else if (alien_color === 'yellow') {
  console.log('Congratulations! You just earned 10 points.');
}else if(alien_color === 'red'){
  console.log('Congratulations! You just earned 15 points.');
}else {
  console.log('Unknown alien color.');
}

