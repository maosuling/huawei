$(function() {
    // console.log(1);
    let index = 0
    let timer = null;
    $('.prev3').on('click', function() {
        index -= 1;
        if (index < 0) {
            index = $('#box555 a').length - 1;
            $('#box555').css({
                'right': 0,
            })
        }
        $('#box555').stop(true).animate({
                'left': parseInt($('#box555>a').css('width')) * -index
            }, 300)
            // console.log(index);
    })
    $('.next3').on('click', function() {
        console.log(1);
        index += 1;
        // console.log($('.wrapp li').length);
        if ($('#box555 a').length == index) {
            $('#box555').css({
                'left': 0,
            })
            index = 0;
        } else {

            $('#box555').stop(true).animate({
                'left': parseInt($('#box555>a').css('width')) * -index
            }, 300)
        }
        // console.log(index);
    });
});