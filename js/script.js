// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */


// var userChoice ="";
var userChoice;
var computerChoice;
var winner;
var randomNumber;

userChoice = "";
computerChoice = "";
winner = "";
randomNumber= Math.random();


// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
    // body...
    $("#userChoice").text($("#input").val());
    var userChoice = $("").val();  
    randomNumber = Math.random();
    
    
})



    // $("#computerChoice").text('test');
    if ( randomNumber > 0.6)
    {
         computerChoice= "rock";
    }
    
    else if (randomNumber > 0.3)
    {
        computerChoice = "paper";
    }
    
    else {
        computerChoice = "scissors";
    }
     $("#computerChoice").text(computerChoice);
    



