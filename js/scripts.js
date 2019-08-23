//BACK END

var stringArray = [];
var outputArray = [];

function halResponse(input) {
  for (var index = 0; index <= input; index++) {
    var stringInput = index.toString();
    stringArray.push(stringInput)
  };
}

//FRONT END

$(document).ready(function() {
  $("form#halInterface").submit(function(event) {
    event.preventDefault();


  });
});
