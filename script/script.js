$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    margin: 30,
    nav: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 7000,
    navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
  });
});
