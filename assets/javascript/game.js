var phrases = [
    "fire",
    "hot",
    "molten",
    "magma",
    "basalt",
    "ashes",
    "obsidian",
    "slag"
]

var wins = 0;
var losses = 0;
var wrongLetter = [];
var guessesLeft = 10;
var underScores = [];
var userGuesses = [];

var pickedPhrase = phrases[Math.floor(Math.random() * phrases.length)];

var answerArray = [];
for (var i = 0; i < pickedPhrase.length; i++) {
 answerArray[i] = "_";
}

var remainingLetters = pickedPhrase.length;
console.log(pickedPhrase)
document.getElementById("goodGuess").innerHTML = answerArray.join("");
/*
var userText = document.getElementById("user-text");

      document.onkeyup = function(event) {
        userText.textContent = event.key;
      };
*/

wrongLetter = [];
document.onkeyup = function(event)
{
    userGuess = event.key;
    if(event.keyCode >= 65 && event.keyCode <= 90)
    {
        if(pickedPhrase.indexOf(userGuess) > -1)
        {
            for(var i = 0; i < pickedPhrase.length; i++)
            {
                if(pickedPhrase[i] === userGuess)
                {
                    answerArray[i] = userGuess;
                    document.getElementById("goodGuess").innerHTML = answerArray.join("");
                    console.log(answerArray);
                };
                
            }
        } 
        else
        {
            wrongLetter.push(userGuess);
            console.log(wrongLetter);             
            document.getElementById("bad-guess").innerHTML = wrongLetter.join("");
            wrongGuess
        }
    };
};
