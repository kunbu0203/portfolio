function portfolioAnimate(){
	var controller = new ScrollMagic.Controller();

	// part01 start--------------------------
	TweenMax.set('.nonio', {opacity:0})

	var tween1 = new TimelineMax()
	.add(TweenMax.to('.nonio', 1, {opacity:1, delay:1}))

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
	TweenMax.set('.systema', {opacity:0})

	var tween2 = new TimelineMax()
	.add(TweenMax.to('.systema', 1, {opacity:1}))

	// build scene
	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".systema",
		// duration: 100,
		offset: 0, //指標位移
		triggerHook: .6, // 觸發位置 0-1,onLeave,onCenter,onEnter
		reverse: false, //動畫重複 default:true
	})
	.setTween(tween2)
	// .addIndicators({ name: "2 (duration: 0)" }) // 指標顯示
	.addTo(controller);
	// part02 end--------------------------

	// part03 start--------------------------
	TweenMax.set('.bmw', {opacity:0})

	var tween3 = new TimelineMax()
	.add(TweenMax.to('.bmw', 1, {opacity:1}))

	// build scene
	var scene3 = new ScrollMagic.Scene({
		triggerElement: ".bmw",
		// duration: 100,
		offset: 0, //指標位移
		triggerHook: .6, // 觸發位置 0-1,onLeave,onCenter,onEnter
		reverse: false, //動畫重複 default:true
	})
	.setTween(tween3)
	// .addIndicators({ name: "3 (duration: 0)" }) // 指標顯示
	.addTo(controller);
	// part03 end--------------------------

	// part04 start--------------------------
	TweenMax.set('.fuco', {opacity:0})

	var tween4 = new TimelineMax()
	.add(TweenMax.to('.fuco', 1, {opacity:1}))

	// build scene
	var scene4 = new ScrollMagic.Scene({
		triggerElement: ".fuco",
		// duration: 100,
		offset: 0, //指標位移
		triggerHook: .6, // 觸發位置 0-1,onLeave,onCenter,onEnter
		reverse: false, //動畫重複 default:true
	})
	.setTween(tween4)
	// .addIndicators({ name: "4 (duration: 0)" }) // 指標顯示
	.addTo(controller);
	// part03 end--------------------------
}

$(document).ready(function () {
	portfolioAnimate();
});