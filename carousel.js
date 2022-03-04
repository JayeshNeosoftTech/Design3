$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        loop: true,
        nav: true,
        dots:false,
        autoplay: true,
        autoplaySpeed: 1000,
        smartSpeed:1500,
        autoplayHoverPause:true,
        addClassActive:true,
        responsive:{
          0:{
            items:1,nav: true,
          },
          600:{
            items:2,nav: true,
          },
          1000:{
            items:3,nav: true,
          }
        },
      });
        var active = $(".owl-carousel").find(".owl-item.active");
        console.log(active);
});