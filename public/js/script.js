//PRELOADER
$(document).ready(function(){
    $('html, body').scrollTop(0);

    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollTop(0);
    }, 0);
 });
})
 
// Smooth Scroll
$('nav a').click(function(e){
e.preventDefault();
var id = $(this).attr('href'),
targetOffset=$(id).offset().top,
menuHeight= $('nav').innerHeight();
$('html, body').animate({
    scrollTop: targetOffset - 80
}, 500);
});

// navbar background
$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    if (scroll >= 25) {
        $('.fixed-top').addClass('header-scrolled');
    } else {
        $('.fixed-top').removeClass('header-scrolled');
    }
});

OS.init();

