var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var randomLetter = letters[Math.floor(Math.random() * letters.length)]; //generates random number
var winner = 0;
var loser = 0;
var letGuess = [];
var reTempt = 10;
console.log(randomLetter)
document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase(); //when the user presses a key

    console.log(userGuess);


if (randomLetter === userGuess) { //if we win
    winner ++; // wins get + 1
    document.getElementById("win").textContent=winner; //goes into html and changes the "win" ID which changes your number of wins
    letGuess = []; //leters guessed gets set to nothing
    document.getElementById("letter").textContent=letGuess;//javascript goes into html and sets the ID letter to a empty array
    reTempt = 10;// attempts gets reset to 10
    document.getElementById("attempt").textContent=reTempt;//javascript goes into html and resets attempts to zero
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
}
if ((randomLetter !== userGuess)&&(letters.includes(userGuess))&&(!letGuess.includes(userGuess))) { //if the computers guess doesnt equal our guess, letters that we type can only be from our letters array, we document the letters that are typed
    letGuess.push(userGuess); // this puts the letters we type in the empty array of userGuess
    document.getElementById("letter").textContent=letGuess; //changes the letter ID
    reTempt --; //attempts gets incremented down by one
    document.getElementById("attempt").textContent=reTempt; //html gets changed by the attempt ID
}
if (reTempt === 0){
    loser ++;
    document.getElementById("loss").textContent=loser;
    letGuess = [];
    document.getElementById("letter").textContent=loser;
    reTempt = 10;
    document.getElementById("attempt").textContent=reTempt;
    randomLetter = letters[Math.floor(Math.random() * letters.length)];

}




}


//Code doesnt work
//code only lets me put in one attempt
//need to add change to html document
//for loop doent work




console.log("Program Complete"); //this console log lets me know the program worked.