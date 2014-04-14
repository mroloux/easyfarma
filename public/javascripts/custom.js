$(function () {
    var viewport_width = window.innerWidth;
    var viewport_height = window.innerHeight;

    $('.banner,.carousel .item').height((viewport_height));
    $(window).resize(function () {
        var viewport_width = window.innerWidth;
        var viewport_height = window.innerHeight;
        $('.banner,.carousel .item').height((viewport_height));
    });
});

$(function () {
    $('ul.navi a').bind('click', function (event) {
        var $anchor = $(this);

        $('html, body').stop().animate({
            scrollTop: ( $($anchor.attr('href')).offset().top - 0)
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$(function () {
    $('#contactmsg').submit(function () {
        $.post('/contact', $(this).serialize())
            .success(function () {
                $('#contactmsg').slideUp();
                $('#contact-message').slideDown();
            });
        return false;
    })
});

$(function () {
    $('#contactform').submit(function () {
        $.post('/houmeopdehoogte', $(this).serialize())
            .success(function () {
                $('#contactform').slideUp();
                $('#houmeopdehoogte-message').slideDown();
            });
        return false;
    })
});