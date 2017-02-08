/**
 * Created by PETER LION on 20/07/2015.
 */

$(function() {
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

$(function () {
    $('.navbar-collapse ul li a:not(.dropdown-toggle)').bind('click touchstart', function () {
        $('.navbar-toggle:visible').click();
    });
});

//$(window).scroll(function () {
//    if ($(window).scrollTop() == 0) {
//        $(".eagle").removeClass("eagle-fixed");
//    } else {
//        $(".eagle").addClass("eagle-fixed");
//    }
//});