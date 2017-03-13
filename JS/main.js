$(window).scroll(function() {
    if ($(document).scrollTop() > 200) {
        $('nav').addClass('navbar-small');
    } else {
        $('nav').removeClass('navbar-small');
    }
});

$(function() {
    smoothScrool(300);
    workBelt();
})

function smoothScrool(duration) {
    $('a[href^="#"]').on('click', function(event) {
        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}
