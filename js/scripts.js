$(document).ready(function () {
  var sum = 0
    $("#abby").click(()=> {

  var randomOne = Math.floor((Math.random()*6) +1);
  $(".output1").text(randomOne);
  sum = sum + randomOne;
  $(".output2").text(sum);
  //alert(random1);
});
$("#wambui").click(()=> {

var randomTwo = Math.floor((Math.random()*6) +1);
$(".output1").text(randomTwo);
sum = sum + randomTwo;
$(".output2").text(sum);
if (randomTwo === 1) {
  alert(0);
}
//alert(random2);
});
if (randomOne === 1) {
  alert();
}



});
