$(document).ready(function () {
    $('.ham').click(function (e) { 
        e.preventDefault();
        $('header').toggleClass('show');
    });
    $('.getStart').click(function (e) { 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $('section.contect .wrapper').offset().top
        }, 800);
        $('header').removeClass('show');
    });
    $('.showPopup').click(function (e) { 
        e.preventDefault();
        $('#activePopup').show();
    });
    $('#btnWinnerPopup').click(function (e) { 
      e.preventDefault();
      $('#winnerPopup').show();
    });


    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        slidesPerView: 1.2,
        spaceBetween: -100,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 500,
            slideShadows : false,
        },
        breakpoints: {
            // when window width is >= 320px
            1025: {
            slidesPerView: 2,
            }
        },
        on: {
            slideChangeTransitionStart: function () {
            $('.camera').removeClass('active');
            },
            slideChangeTransitionEnd: function () {
            $('.camera').addClass('active');
            }
        }
    });

    doAnimate();
    
    GAtracking();


});