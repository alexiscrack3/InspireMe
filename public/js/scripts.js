$(document).ready(function() {
    $('footer').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });

    var menu    = $('nav ul');
    var leftBox = $('.left-box');
    var left    = 0;

    $('.right-box').click(function(event) {
        menu.animate({
            scrollLeft: ++left },
            'fast', function() {
            if (left > 0) {
                leftBox.css('display', 'block');
            }
        });
    }).mouseup(function(event) {
    });

    leftBox.click(function(event) {
        menu.animate({
            scrollLeft: --left },
            'fast', function() {
            if (left === 0) {
                leftBox.css('display', 'none');
            }
        });
    });

    var positionX = menu.position().left;
});
