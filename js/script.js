// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW
$("#shoot").click(function() {
    // body...
    $("#userChoice").text($("#input").val());
})

$("#choices").click(function(){
    $("#computerChoice").text($("#input").val());
})

