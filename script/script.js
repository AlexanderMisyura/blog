window.addEventListener("DOMContentLoaded", function(e) {
  document.querySelectorAll(".header-nav-social .header-nav-link").forEach(function(link) {
    link.setAttribute("target", "_blank");
  });

  if (document.getElementById("jQuery_file")) {
    console.log('jquery found');    
    
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
  }
})
