//back end

var beepBoop = function(inputNumber) {
  var numbers = "";
  var stringNumber = inputNumber.toString();

  if (inputNumber % 3 === 0) {
    return numbers.concat("I'm sorry. I'm afraid I can't do that.");

  } else if (stringNumber.includes("1")) {
      return numbers = numbers.concat("Boop");

  } else if (stringNumber.includes("0")) {
      return numbers = numbers.concat("Beep");

    } else {
      for (index = 0; index <= stringNumber; index++) {
        numbers = numbers.concat(index + ",");
      };
      return numbers;
    };
  };

//front end
$(document).ready(function() {
  $("#userInput").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#userNumber").val());
    var result = beepBoop(userNumber);
    $(".display").show();
    $("#userInput").each(function() {
      this.reset();
    });
    $(".beepBoopResult").text(result)
  });
});
