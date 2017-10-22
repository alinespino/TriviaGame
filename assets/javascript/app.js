

// window.onload = function() {
// run();
//   // $("#lap").on("click", stopwatch.recordLap);
//   // $("#stop").on("click", stopwatch.stop);
//   // $("#reset").on("click", stopwatch.reset);
//   // $("#start").on("click", stopwatch.start);
// };



// variables to store answers : // 

var correct = 0;
var incorrect = 0;
var noAnswer = 0;



// timer //
var timer = 5;
var interval;



//when counter in "0" switch page and show results // 
// .on("click",openWin())


// FUNCTIONS // 

$(document).ready (function() { 
run();

// start counter when page loads : decrement 1min // 

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


// stop counter // 
// show timer in #counter tag //
//once hits 0 show results //

function openWin() {
window.location.replace("results.html"); 
}




// Run once page loads // 

});


