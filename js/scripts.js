//BACK END

var stringArray = [];
var outputArray = [];

function halResponse(input) {
  for (var index = 0; index <= input; index++) {
    var stringInput = index.toString();
    stringArray.push(stringInput)
  };

  stringArray.forEach(function(stringArrayElement) {
    if ((stringArrayElement.includes("3"))) {
      outputArray.push("I'm sorry Dave, I'm afraid I can't do that");
    } else if ((stringArrayElement.includes("2"))) {
      outputArray.push("boop");
    } else if ((stringArrayElement.includes("1"))) {
      outputArray.push("beep");
    } else {
      outputArray.push(stringArrayElement);
    }
  })
  return outputArray.join(", ")
};

//FRONT END

$(document).ready(function() {
  $("form#halInterface").submit(function(event) {
    event.preventDefault();

    var userInput = $("input#interface").val();

    var output = halResponse(userInput);


    $("h1#halOutput").text(output);

  });
});
