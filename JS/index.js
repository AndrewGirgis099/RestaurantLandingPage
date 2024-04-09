  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' );
    splide.mount();
  } );

  var splide = new Splide( '.splide', {
    perPage: 4,
    focus  : 0,
    omitEnd: true,
    autoplay: true,
    interval:  2000,
    
    perPage: 5,
    breakpoints: {
      990: {
        perPage: 2,
      },
      600: {
        perPage: 1,
      },
    }
    

  } );

  
  
  splide.mount();



;

// owl-Slider
$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});



$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  responsiveClass:true,
  responsive:{
      0:{
          items:3,
          nav:true
      },
      600:{
          items:3,
          nav:false
      },
      1000:{
          items:6,
          nav:true,
          loop:false
      }
  },

  autoplay:true,
autoplayTimeout:4000,
autoplayHoverPause:false
})


// WOW.JS
new WOW().init();
