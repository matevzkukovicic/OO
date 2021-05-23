console.log("loaded");
/*
$(".move-area").mousemove(function(event) {
    var eye = $(".eye");
    //console.log('eye', eye)
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
    });
});

$("#move-area2").mousemove(function(event) {
    var eye = $(".eye2");
    console.log('eye', eye)
    var x = (eye.offset().left) + (eye.width() / 2);
    var y = (eye.offset().top) + (eye.height() / 2);
    var rad = Math.atan2(event.pageX - x, event.pageY - y);
    var rot = (rad * (180 / Math.PI) * -1) + 180;
    eye.css({
        '-webkit-transform': 'rotate(' + rot + 'deg)',
        '-moz-transform': 'rotate(' + rot + 'deg)',
        '-ms-transform': 'rotate(' + rot + 'deg)',
        'transform': 'rotate(' + rot + 'deg)'
    });
});

let eyeBall = document.querySelector(".eyeball"),
    pupil = document.querySelector(".pupil"),
    eyeArea = eyeBall.getBoundingClientRect(),
    pupilArea = pupil.getBoundingClientRect(),
    R = eyeArea.width/4,
    r = pupilArea.width/2,
    centerX = eyeArea.left + R,
    centerY = eyeArea.top + R;

document.addEventListener("mousemove", (e)=>{
    let x = e.clientX - centerX,
        y = e.clientY - centerY,
        theta = Math.atan2(y,x),
        angle = theta*180/Math.PI + 360;
    pupil.style.transform = `translateX(${R - r +"px"}) rotate(${angle + "deg"})`;
    pupil.style.transformOrigin = `${r +"px"} center`;
});
 */

$( document ).ready(function() {
    const eye1P = document.querySelector('.eye-leftP');
    const eye2P = document.querySelector('#rep');
    window.addEventListener('mousemove', (evt) => {
        const x = -(window.innerWidth / 1.7 - evt.pageX) / 160;
        const y = -(window.innerHeight / 1.7 - evt.pageY) / 160;
        eye1P.style.transform = `translateY(${y}px) translateX(${x}px)`;
        eye2P.style.transform = `translateY(${y}px) translateX(${x}px)`;
    });

    const eye1 = document.querySelector('.eye-left');
    const eye2 = document.querySelector('.eye-right')
    window.addEventListener('mousemove', (evt) => {
        const x = -(window.innerWidth / 2 - evt.pageX) / 160;
        const y = -(window.innerHeight / 2 - evt.pageY) / 160;
        eye1.style.transform = `translateY(${y}px) translateX(${x}px)`;
        eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
    });
});


