


// COULD NOT FIGURE OUT WHY MY RESULTS COULD NOT SHOW IN THE RESULTS.HTML PAGE.

// ALSO, DIDNT KNOW HOW TO USE FOR LOOPS AND CONDITIONS WITH TIMER AND DONE BUTTON,
  // I JUST COPIED IT TWICE =( //  

// timer variables//
var timer = 6;
var interval;


// results variables //
var correct = 0;
var incorrect = 0;

var answers = ["b", "a", "b", "c", "c"];

// functions results//

function right() {
correct ++;

}

function wrong() {
incorrect ++;

}

// TIMER // // 


function run() {
interval = setInterval(decrement, 1000);
}

function decrement() {
timer --;
$("#counter").text("Time remaining:" + " " + timer + " " + "secs" );
}

function openWin() {
window.location= "results.html";
}

if (timer === 0) {
openWin();
}


// DOCUMENT READY // 

$(document).ready (function(){
run();


$("#done-btn").on("click",function(e){  
e.preventDefault();


// variables to store answers // 


var userAnswers = [];
var numQuestions = 5;



for (var i = 0; i < numQuestions; i++) {
	var selValue = $('input[name=q'+(i+1)+']:checked').val();
	userAnswers.push(selValue);
}

if (answers[0] === userAnswers[0]) {
right();
$("#yes").text("Correct Answers: " + correct);
}

else {
wrong();
$("#no").text("Incorrect Answers: " + incorrect);
}

if (answers[1] === userAnswers[1]) {
right();
$("#yes").text("Correct Answers: " + correct);

}
else {
wrong();
$("#no").text("Incorrect Answers: " + incorrect);
}

if (answers[2] === userAnswers[2]) {
right();
$("#yes").text("Correct Answers: " + correct);

}
else {
	wrong();
	$("#no").text("Incorrect Answers: " + incorrect);
}

if (answers[3] === userAnswers[3]) {
right();
$("#yes").text("Correct Answers: " + correct);

}
else {
	wrong();
	$("#no").text("Incorrect Answers: " + incorrect);
}

if (answers[4] === userAnswers[4]) {
right();
$("#yes").text("Correct Answers: " + correct);

}
else {
	wrong();
	$("#no").text("Incorrect Answers: " + incorrect);
}

alert ("Correct Answers: " + correct);
alert("Incorrect Answers: " + incorrect);

})




});


