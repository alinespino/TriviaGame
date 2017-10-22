


// variables to store answers // 

var correct = 0;
var incorrect = 0;
var noAnswer = 0;


// timer variables//
var timer = 60;
var interval;


// FUNCTIONS // 

// e.preventDefault() // not working //

run();

//ANSWERS //

var answers = ["b", "a", "b", "c", "c"];

$(document).ready (function(){
$("#done-btn").on("click",function(e){  
e.preventDefault();

var userAnswers = [];
var numQuestions = 5;
for (var i = 0; i < numQuestions; i++) {
	var selValue = $('input[name=q'+(i+1)+']:checked').val();
	userAnswers.push(selValue);
	console.log(selValue)
}



if (answers[1] === userAnswers[1]) {
	correct ++;
	$("#correct").text("Correct Ansers: " + " " + correct)
}

console.log(answers);
console.log(userAnswers);

})



// TIMER

function run() {
interval = setInterval(decrement, 1000);
}

function decrement() {
timer --;
$("#counter").text("Time remaining:" + " " + timer + " " + "secs" );

if (timer === 0) {
openWin();
}

};

function openWin() {
window.location.replace("results.html"); 
}





});


