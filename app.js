$(document).ready(function () {
    $('.nut-g').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 660
        },'slow')
    });
    $('.nut-k').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 1410
        },'slow')
    });
    $('.nut-l').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop: 2010
        },'slow')
    });
});