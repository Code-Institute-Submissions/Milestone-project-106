
// add mouseenter/leave for the two buttons

$("button").mouseenter(function(){
  $("button").removeClass("button1-change-color").addClass("make-border");
});
$("button").mouseleave(function(){
  $("button").removeClass("make-border").addClass("button1-change-color");
});

$("button").mouseenter(function(){
  $("button").removeClass("button2-change-color").addClass("make-border");
});
$("button").mouseleave(function(){
  $("button").removeClass("make-border").addClass("button2-change-color");
});


// add counter for the number of the stations, change target number when more stations go live

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


