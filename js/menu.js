$(document).ready(function () {
    $('.menuBtn').click(function (e) { 
        e.preventDefault();
        $('.main').toggleClass('itemHide');
        $('.main').toggleClass('menuOpen');
    });
});


