import * as $ from 'jquery';
import './styles/main.scss';
import Swiper from 'swiper';
// import AOS from 'aos';

import './js/header.js';

document.addEventListener('DOMContentLoaded', function() {
    var mySwiper = new Swiper('.swiper-container', { 
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        slidesPerView: 1,
        breakpoints: {
            1600: {
              slidesPerView: 2,
            }
          },
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
    });
    // AOS.init();
 }, false);


