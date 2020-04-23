$(document).ready(function () {
    $('.open').click(function (e) { 
        e.preventDefault();
        $('body').addClass('itemHide').delay(500).queue(function(){
            $(this).addClass('menuOpen');
            $(this).dequeue();
        });
    });
    $('.close').click(function (e) { 
        e.preventDefault();
        $("body").removeClass("menuOpen").delay(700).queue(function(){
            $(this).removeClass("itemHide");
            $(this).dequeue();
        });
    });
});
