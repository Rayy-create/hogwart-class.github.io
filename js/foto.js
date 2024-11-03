$(document).ready(function() {
  $('.identification-img-section').slick({
    centerMode: true,
    centerPadding: "0px",
    sliderToShow: 1,
    sliderToScrol: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    arrows: false,
    infinite: true
  });
  
  setTimeout(function() {
    AOS.refresh();
  }, 1000);
  /*guna kan bila terdesak*/
 /* 
  setSlideOpacity();
  
  $slider.on('afterChange', function(event, slick, currentSlide) {
    setSlideOpacity();
  });

  function setSlideOpacity() {
    var $slides = $slider.find('.slick-slide');
    var $slider = $('.slider')
    $slides.css('Opacity', '0.5');
    $slider.find('.slick-center').css('Opacity', '1');
  }*/
});