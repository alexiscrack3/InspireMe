$(document).ready(function() {
    $('footer').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
        return false;
    });
    // $('.extra-box').click(function(event) {
    //     $('nav ul').animate({
    //         scrollLeft: 0 },
    //         'slow', function() {
    //     });
    // });

    var positionX = $('nav ul').position().left;

    // $('.extra-box').hover(function(e) {
    //     positionX += 1;
    //     $('nav ul').animate({
    //         scrollLeft: positionX },
    //         'slow', function() {
    //             console.log(positionX);
    //     });
    // }, function(e) {
    //     console.log('afuera');
    // });

    $('.extra-box').hover(function(e) {
        console.log('adentro');
        $('.extra-box').hover();
    }, function(e) {
        console.log('afuera');
    });
});
