
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


