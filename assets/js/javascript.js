$("button").mouseenter(function(){
  $("button").removeClass("make-red").addClass("make-border");
});
$("button").mouseleave(function(){
  $("button").removeClass("make-border").addClass("make-red");
});


$("#button-direction").click(function(){
  $(".form").hide(2000).show(2000);
});

var counters = document.querySelectorAll('.counter');
var speed = 100000;

counters.forEach(counter => {
    var updateCount = () => {
        var target = +counter.getAttribute('data-target');
        var count = +counter.innerText;

        var inc = target / speed;


        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 1);
        }else {
            count.innerText = target;
        }
    }

    updateCount();
});