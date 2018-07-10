$(window).on('load', function() {
    $('.loader').delay(500).fadeOut('slow');
});


$(document).ready(function () {

$('.carousel').carousel({
  interval: 3000,
  pause: false
})
    
    
    $(window).on('scroll', function () {
        if ($(window).scrollTop() < 100) {
            $('.header').removeClass('sticky_header');
        } else {
            $('.header').addClass('sticky_header');
        }
    });
    
    
      
    
    
    

})