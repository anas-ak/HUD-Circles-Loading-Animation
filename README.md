# HUD-Circles-Loading-Animation
Heads Up Display circles Loading Animation

<img src='hud-circles.gif'>

<p>Updated: February 10, 2021</p> <br>
<p> 
  Basic circular loading animation, most popular for HUD (Heads Up Display). <br>
  Used to make these with Adobe After Effects. <br>
</p>

<h4>JS Code Snippet </h4>

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
