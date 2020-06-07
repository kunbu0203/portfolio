function commonAnimate(){
    var controller = new ScrollMagic.Controller();

	// part01 start--------------------------
    if (window.innerWidth<641) {
        TweenMax.set('article.hide .wrapper', {x:-16, y:16, opacity:0})
        TweenMax.set('article.hide .contentBottom01', {x:8, y:-8})
        TweenMax.set('article.hide .contentBottom02', {x:16, y:-16})
        TweenMax.set('article.menuFixHeight .items', {y:100, opacity:0})

        var tween0 = new TimelineMax()
        .add(TweenMax.to('article.hide .wrapper', 1, {opacity:1, delay:.5}))
        .add(TweenMax.to('article.hide .wrapper', .5, {x:0, y:0, delay:-.5}))
        .add(TweenMax.to('article.hide .contentBottom01', .5, {x:0, y:0, opacity:1, delay:-.5}))
        .add(TweenMax.to('article.hide .contentBottom02', .5, {x:0, y:0, opacity:1, delay:-.5}))
        .add(TweenMax.to('article.menuFixHeight .items', 1, {y:0, opacity:1, ease:Back.easeOut}))

        // build scene
        var scene0 = new ScrollMagic.Scene({
            triggerElement: "body",
            // duration: 100,
            offset: 0, //指標位移
            triggerHook: 0, // 觸發位置 0-1,onLeave,onCenter,onEnter
            reverse: false, //動畫重複 default:true
        })
            .setTween(tween0)
            // .addIndicators({ name: "0 (duration: 0)" }) // 指標顯示
            .addTo(controller);
    } else if (window.innerWidth<769){
        TweenMax.set('article.hide .wrapper', {x:-30, y:30, opacity:0})
        TweenMax.set('article.hide .contentBottom01', {x:15, y:-15})
        TweenMax.set('article.hide .contentBottom02', {x:30, y:-30})
        TweenMax.set('article.menuFixHeight .items', {y:100, opacity:0})

        var tween0 = new TimelineMax()
        .add(TweenMax.to('article.hide .wrapper', 1, {opacity:1, delay:.5}))
        .add(TweenMax.to('article.hide .wrapper', .5, {x:0, y:0, delay:-.5}))
        .add(TweenMax.to('article.hide .contentBottom01', .5, {x:0, y:0, opacity:1, delay:-.5}))
        .add(TweenMax.to('article.hide .contentBottom02', .5, {x:0, y:0, opacity:1, delay:-.5}))
        .add(TweenMax.to('article.menuFixHeight .items', 1, {y:0, opacity:1, ease:Back.easeOut}))

        // build scene
        var scene0 = new ScrollMagic.Scene({
            triggerElement: "body",
            // duration: 100,
            offset: 0, //指標位移
            triggerHook: 0, // 觸發位置 0-1,onLeave,onCenter,onEnter
            reverse: false, //動畫重複 default:true
        })
            .setTween(tween0)
            // .addIndicators({ name: "0 (duration: 0)" }) // 指標顯示
            .addTo(controller);
    } else{
        TweenMax.set('article.hide .wrapper', {x:-50, y:50, opacity:0})
        TweenMax.set('article.hide .contentBottom01', {x:25, y:-25})
        TweenMax.set('article.hide .contentBottom02', {x:50, y:-50})
        TweenMax.set('article.menuFixHeight .items', {y:100, opacity:0})

        var tween0 = new TimelineMax()
        .add(TweenMax.to('article.hide .wrapper', 1, {opacity:1, delay:.5}))
        .add(TweenMax.to('article.hide .wrapper', .5, {x:0, y:0, delay:-.5}))
        .add(TweenMax.to('article.hide .contentBottom01', .5, {x:0, y:0, opacity:1, delay:-.5}))
        .add(TweenMax.to('article.hide .contentBottom02', .5, {x:0, y:0, opacity:1, delay:-.5}))
        .add(TweenMax.to('article.menuFixHeight .items', 1, {y:0, opacity:1, ease:Back.easeOut}))

        // build scene
        var scene0 = new ScrollMagic.Scene({
            triggerElement: "body",
            // duration: 100,
            offset: 0, //指標位移
            triggerHook: 0, // 觸發位置 0-1,onLeave,onCenter,onEnter
            reverse: false, //動畫重複 default:true
        })
            .setTween(tween0)
            // .addIndicators({ name: "0 (duration: 0)" }) // 指標顯示
            .addTo(controller);
    }
	// part01 end--------------------------
}

$(document).ready(function () {
    $('.open').click(function (e) { 
        e.preventDefault();
        $('body').addClass('itemHide').delay(500).queue(function(){
            $(this).addClass('menuOpen');
            $('article.hide .wrapper').slideUp();
            $(this).dequeue();
        });
    });
    $('.close').click(function (e) { 
        e.preventDefault();
        $('article.hide .wrapper').slideDown();
        $('body').removeClass('menuOpen').delay(700).queue(function(){
            $(this).removeClass('itemHide');
            $(this).dequeue();
        });
    });

    $('a.location#index').click(function (e) { 
        e.preventDefault();
        $('.menu').css('opacity', '0').delay(600).queue(function(){
            window.location.href="./index.html";
            $(this).dequeue();
        });
    });
    $('a.location#aboutMe').click(function (e) { 
        e.preventDefault();
        $('.menu').css('opacity', '0').delay(600).queue(function(){
            window.location.href="./aboutMe.html";
            $(this).dequeue();
        });
    });
    $('a.location#portfolio').click(function (e) { 
        e.preventDefault();
        $('.menu').css('opacity', '0').delay(600).queue(function(){
            window.location.href="./portfolio.html";
            $(this).dequeue();
        });
    });
    $('a.location#experience').click(function (e) { 
        e.preventDefault();
        $('.menu').css('opacity', '0').delay(600).queue(function(){
            window.location.href="./experience.html";
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

    commonAnimate();
});
