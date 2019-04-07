// Business logic
$(document).ready(function () {
  var sumOne = 0
  var sumTwo = 0
    $("#abby").click(()=> {

  var randomOne = Math.floor((Math.random()*6) +1);
  $(".output1").text(randomOne);
  sumOne = sumOne + randomOne;
  $(".output2").text(sumOne);

  if (randomOne===1) {
    return sumOne *=0;
  }
  //alert(random1);
});
$("#wambui").click(()=> {

var randomTwo = Math.floor((Math.random()*6) +1);
$(".output3").text(randomTwo);
sumTwo = sumTwo + randomTwo;
$(".output4").text(sumTwo);

if (randomTwo===1) {
  return sumTwo *= 0;
}
});

//alert(random2);
});


//User logic
$(document).ready(function() {
  $("#hold2").click(function() {
    $("button#wambui").toggle();
    $(".images").toggle();
  });
  $("#hold1").click(function() {
    $("button#abby").toggle();
    $(".images").toggle();
  });
});
