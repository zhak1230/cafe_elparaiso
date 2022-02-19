'use strict';

// // Main Slide Btn
// document.querySelector('.slide__Btn2').addEventListener('click', function(){
//     document.querySelector('.slide__container').style.transform =
//     'translate(-100vw)';
// })
// document.querySelector('.slide__Btn3').addEventListener('click', function(){
//     document.querySelector('.slide__container').style.transform =
//     'translate(-200vw)';
// })
// document.querySelector('.slide__Btn1').addEventListener('click', function(){
//     document.querySelector('.slide__container').style.transform =
//     'translate(00vw)';
// })



// <!-- pound cake slide -->

$("document").ready(function () {

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: false,
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

// new slide Btn(Methods)
    $('.prev').click(function(){
        swiper.slidePrev();
    });
    $('.next').click(function(){
        swiper.slideNext();
    })
  
    $('.pager span').click(function(){
        swiper.slideTo($(this).index());
    });

    const swiper2 = new Swiper('.banner', {
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


    const swiper3 = new Swiper('.multiple', {
      direction: 'horizontal',
      loop: true,
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
      // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
  
    });

  
});//document ready