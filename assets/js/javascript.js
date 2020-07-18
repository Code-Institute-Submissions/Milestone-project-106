$("button").mouseenter(function(){
  $("button").removeClass("make-red").addClass("make-border");
});
$("button").mouseleave(function(){
  $("button").removeClass("make-border").addClass("make-red");
});


$("#button-direction").click(function(){
  $(".form").hide(2000).show(2000);
});