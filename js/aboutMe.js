function aboutMeAnimate(){
	var controller = new ScrollMagic.Controller();

	// part01 start--------------------------
	TweenMax.set('section.information', {opacity:0})

	var tween1 = new TimelineMax()
	.add(TweenMax.to('section.information', 1, {opacity:1}))

	// build scene
	var scene1 = new ScrollMagic.Scene({
		triggerElement: "body",
		// duration: 100,
		offset: 0, //指標位移
		triggerHook: 0, // 觸發位置 0-1,onLeave,onCenter,onEnter
		reverse: false, //動畫重複 default:true
	})
	.setTween(tween1)
	// .addIndicators({ name: "1 (duration: 0)" }) // 指標顯示
	.addTo(controller);
	// part01 end--------------------------



	// part02 start--------------------------
	console.log(1300);
	TweenMax.set('section.skill', {opacity:0})
	TweenMax.set('.head', {opacity:0})

	var tween2 = new TimelineMax()
	.add(TweenMax.to('section.skill', 1, {opacity:1}))
	.add(TweenMax.to('.head', 1, {opacity:1, delay:-1}))

	// build scene
	var scene2 = new ScrollMagic.Scene({
		triggerElement: "section.skill",
		// duration: 100,
		offset: 0, //指標位移
		triggerHook: .5, // 觸發位置 0-1,onLeave,onCenter,onEnter
		reverse: false, //動畫重複 default:true
	})
	.setTween(tween2)
	// .addIndicators({ name: "2 (duration: 0)" }) // 指標顯示
	.addTo(controller);
	// part02 end--------------------------
}

$(document).ready(function () {
	//initialize swiper when document ready
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		effect: 'coverflow',
		slidesPerView: 1.9,
		// grabCursor: true,
		centeredSlides: true,
		spaceBetween: 0,
		loop: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 500,
			slideShadows : false,
		},
		autoplay: {
            delay: 2000,
            disableOnInteraction: false,
		},
		breakpoints: {
            1041: {
			slidesPerView: 3.38,
			coverflowEffect: {
				depth: 250,
				},
            }
        },
	})

	aboutMeAnimate();
});