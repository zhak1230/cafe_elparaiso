'use strict';

// <!-- pound cake slide -->

$("document").ready(function () {

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // autoplay: {
    //     delay: 3000},

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
    
  });


  
});//document ready

// Make home slowly fade to transparent as the window scrolls down
const poundCake = document.querySelector('.pound-cake');
// 값 지정해주기
const poundCakeHeight = poundCake.getBoundingClientRect().height;
// 높이 알아오기
document.addEventListener('scroll', ()=>{

  poundCake.style.opacity = window.scrollY /poundCakeHeight +0.12  ;
  // css 값 설정 = 값(상황)에 맞게 설정
});