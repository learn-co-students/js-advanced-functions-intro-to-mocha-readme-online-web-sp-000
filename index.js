
function theTruth() {
  return true;
}


// sayHey, which returns the string 'Hey!'.

function sayHey() {
  return "Hey!";
}


// rite a function called sayHeyFriend, that takes one argument (the name of the friend). The function returns the string 'Hey <NAME>!' (e.g., 'Hey, Johnny!').

function sayHeyFriend(name) {
  return `Hey, ${name}!`;
}

// Write a function called favoriteIceCream, which accepts a parameter and returns the string "I love <NAME_OF_ICECREAM>".

function favoriteIceCream(flavor) {
  return `I love ${flavor}`;
}


// Write a function called shouting, which accepts a string as a parameter and returns the string in all caps.
// Write a function called roundDown, which accepts a number as parameter and returns the number rounded down the closest whole number.


function shouting(string) {
  return string.toUpperCase();
}

function roundDown(number) {
  return Math.floor(number);
}
