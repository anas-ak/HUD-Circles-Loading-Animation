$(document).ready(function() {
    rotateCircles();
});

function rotateCircles() {
    $('div[class *= "circle"]').each(function() {
        var that = this,
            direction = ["-", "+"],
            chosenDirection = direction[Math.floor(Math.random() * direction.length)],
            speed = Math.floor((Math.random() * 250) + 100),
            looper = setInterval(circleMove, 2000);

            function circleMove() {
                $(that).animate({
                    rotation: chosenDirection + '=' + speed
                }, {
                    duration: 2000,
                    easing: 'linear',
                    step: function(now) {
                        $(that).css({
                            "transform": "rotate(" + now + "deg)"
                        });
                    }
                });
            }
    circleMove();
        });
}