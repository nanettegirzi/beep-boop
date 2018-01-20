var userInput = parseInt($("#number").val());

var numbers = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

var beep = "Beep";
var boop = "Boop";
var sorry = "I'm sorry. I'm afraid I can't do that.";


function beepBoop() {
  if (index % 3 === 0){
    $("#list").append("<li>" + sorry + "</li>");
  } else if (index.inludes(1)) {
    $("#list").append("<li>" + boop + "</li>");
  } else if (index.includes(0)) {
    $("#list").append("<li>" + beep + "</li>");
  }
};

for (var index = 0; index <=userInput; index++) {
  beepBoop();
}

$(document).ready(function() {
  $("#number-replacer").submit(function(event) {
    event.preventDefault();

    $("#number-replacer").toggle();
    $("#result").toggle();

    $("#again").click(function(event){
        $("#number-replacer").toggle();
        $("#result").toggle();
      });


  });
});
