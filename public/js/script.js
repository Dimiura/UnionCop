$(document).ready(function(){
    $('html, body').scrollTop(0);

    $(window).on('load', function() {
    setTimeout(function(){
        $('html, body').scrollTop(0);
    }, 0);
 });
})

$('nav a').click(function(e){
e.preventDefault();
var id = $(this).attr('href'),
targetOffset=$(id).offset().top;
$('html, body').animate({
    scrollTop: targetOffset - 80
}, 500);

});

