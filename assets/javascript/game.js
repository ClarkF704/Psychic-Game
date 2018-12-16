alert("guess a number 1-10");

var UserNumber = 10; // tells user to pick a number between 1 and 10 // OPTIONS
var guess = prompt("What is your guess?");                             
var RandomNumber = Math.floor(Math.random() * UserNumber) +1; //generates random number

for (i=0; i < UserNumber; i++){
    if (guess == RandomNumber){
        alert("You guessed correctly")
        break;
    } else {
        alert("Try again");
    }
}


//Code doesnt work
//code only lets me put in one attempt
//need to add change to html document
//for loop doent work




console.log("Program Complete"); //this console log lets me know the program worked.