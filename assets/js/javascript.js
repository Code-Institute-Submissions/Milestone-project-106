//*********COUNT UP**********************//
var counters = document.querySelectorAll('.counter');
var speed = 10;

counters.forEach(counter => {
    var updateCount = () => {
        var target = +counter.getAttribute('data-target');
        var count = +counter.innerText;

        var inc = target / speed;


        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 100);
        }else {
            count.innerText = target;
        }
    }

    updateCount();
});

//*********GET DIRECTIONS BUTTON EFFECT**********************//
$("button").mouseenter(function(){
  $("button").removeClass("btn btn-success").addClass("btn btn-secondary");
});
$("button").mouseleave(function(){
  $("button").removeClass("btn btn-secondary").addClass("btn btn-success");
});