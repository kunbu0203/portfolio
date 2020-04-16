// $(document).ready(function () {
//     $('.menuBtn').click(function (e) { 
//         e.preventDefault();
//         $('.main').toggleClass('itemHide');
//         $('.main').toggleClass('menuOpen');
//     });
// });

$(document).ready(function () {
    $('.open').click(function (e) { 
        e.preventDefault();
        $('.main').addClass('itemHide').delay(500).queue(function(){
            $(this).addClass('menuOpen');
            $(this).dequeue();
        });
    });
    $('.close').click(function (e) { 
        e.preventDefault();
        $(".main").removeClass("menuOpen").delay(700).queue(function(){
            $(this).removeClass("itemHide");
            $(this).dequeue();
        });
    });
});
