'use strict';

// Main Slide Btn
document.querySelector('.slide__Btn2').addEventListener('click', function(){
    document.querySelector('.slide__container').style.transform =
    'translate(-100vw)';
})
document.querySelector('.slide__Btn3').addEventListener('click', function(){
    document.querySelector('.slide__container').style.transform =
    'translate(-200vw)';
})
document.querySelector('.slide__Btn1').addEventListener('click', function(){
    document.querySelector('.slide__container').style.transform =
    'translate(00vw)';
})