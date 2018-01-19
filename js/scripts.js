// business logic
var inputNumber = parseInt($("input#number").val());
var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]


function beepBoop(inputNumber) {
  if (inputNumber.includes(0)) {
    return (["Beep"]);
  } else if (number.includes(1) && (number.includes(0))) {
    return (["Boop"]);
  } else if (number % 3 === 0) {
    return (["I'm sorry, Dave. I'm afraid I can't do that."]);
  } else {
    alert("Please enter a number.");
  }

};





// user interface logic
$(document).ready(function() {
  $("form#number-replacer").submit(function(event) {
    event.preventDefault();
    //var number = parseInt($("input#number").val());
    //var result = beepBoop(number);
    $("#result").text(result);
  });
});
