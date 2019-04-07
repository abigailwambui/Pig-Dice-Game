// Business logic
$(document).ready(function () {
  var sumOne = 0
  var sumTwo = 0
    $("#abby").click(()=> {

  var randomOne = Math.floor((Math.random()*6) +1);
  $(".output1").text(randomOne);
  sumOne = sumOne + randomOne;
  $(".output2").text(sumOne);
  //alert(random1);
});
$("#wambui").click(()=> {

var randomTwo = Math.floor((Math.random()*6) +1);
$(".output3").text(randomTwo);
sumTwo = sumTwo + randomTwo;
$(".output4").text(sumTwo);
if (randomtwo===1) {
  alert(0);
}

//alert(random2);
});
if (randomOne === 1) {
  alert();
}



});
