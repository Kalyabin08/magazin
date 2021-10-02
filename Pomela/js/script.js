$( document ).ready(function() {
    $('.slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
        vertical: true,
        loop:true,
        arrows:false,
        dots: true,
        verticalSwiping: true,

	  });
});


'use strict'

window.onload = function() {
    const paralax = document.querySelector('.whoIm');

    if (paralax) {
        const fruit_parallax_1 = document.querySelector('.fruit_parallax_1');
        const fruit_parallax_2 = document.querySelector('.fruit_parallax_2');
        const fruit_parallax_3 = document.querySelector('.fruit_parallax_3');

        const forFruit_parallax_1 = 1;
        const forFruit_parallax_2 = 6;
        const forFruit_parallax_3 = 3;
       


        const speed = 0.05;

        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;

        function setMouseParalaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed);
            positionY = positionY + (distY * speed);


            fruit_parallax_1.style.cssText = `transform: translate(${positionX / forFruit_parallax_1 / 2}%, ${positionY / forFruit_parallax_1 / 2}%)`;
            fruit_parallax_2.style.cssText = `transform: translate(${positionX / forFruit_parallax_2 / 2}%, ${positionY / forFruit_parallax_2 / 2}%)`;
            fruit_parallax_3.style.cssText = `transform: translate(${positionX / forFruit_parallax_3 / 2}%, ${positionY / forFruit_parallax_3 / 2 }%)`;
           
            

            requestAnimationFrame(setMouseParalaxStyle);
        }
        setMouseParalaxStyle();

        paralax.addEventListener('mousemove', function(e) {
            const paralaxWidth = paralax.offsetWidth;
            const paralaxHeight = paralax.offsetHeight;

            const coordX = e.pageX - paralaxWidth / .1;
            const coordY = e.pageY - paralaxHeight / .1;

            coordXprocent = coordX / paralaxWidth * 20;
            coordYprocent = coordY / paralaxHeight * 20;
        });

    }

}