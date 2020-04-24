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

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    // var div = document.getElementById('test');
    // console.log(div.clientHeight);
    // $('.menuFixHeight .wrapper').css('margin-top', 'div');

});
