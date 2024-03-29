// Top Scroll 

var goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);

function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }

function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
}

(function() {
  'use strict';
  
  function trackScroll() {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;
  
    if (scrolled > coords) {
      goTopBtn.classList.add('back_to_top-show');
    }
    if (scrolled < coords) {
      goTopBtn.classList.remove('back_to_top-show');
    }
  }
  
  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -80);
      setTimeout(backToTop, 0);
    }
  }
  
  var goTopBtn = document.querySelector('.back_to_top');
  
  window.addEventListener('scroll', trackScroll);
  goTopBtn.addEventListener('click', backToTop);
})();

// Slaider

var slides = document.querySelectorAll('#testimonials_block .testimonials_block_content');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide, 2000);

function nextSlide(){
    slides[currentSlide].className = 'testimonials_block_content';
    currentSlide = (currentSlide+1)%slides.length;
    slides[currentSlide].className = 'testimonials_block_content showing';
}