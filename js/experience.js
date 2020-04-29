function experienceAnimate(){
	var controller = new ScrollMagic.Controller();

	// part01 start--------------------------
	TweenMax.set('section', {opacity:0})

	var tween1 = new TimelineMax()
	.add(TweenMax.to('section', 1, {opacity:1, delay:1}))

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

	// svg draw start-------------------------
	function pathPrepare ($el) {
		var lineLength = $el[0].getTotalLength();
		$el.css("stroke-dasharray", lineLength);
		$el.css("stroke-dashoffset", lineLength);
	}

	var $line = $(".arrowLine .cls-1");
	var $arrow = $(".arrowLine .cls-2");
	// var $dot = $("path#dot");

	// prepare SVG
	pathPrepare($line);
	pathPrepare($arrow);
	// pathPrepare($dot);

	// init controller
	// var controller = new ScrollMagic.Controller();

	// build tween
	var tween = new TimelineMax()
		.add(TweenMax.to($line, 0.95, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to($arrow, 0.05, {strokeDashoffset: .05, ease:Linear.easeNone}))  // draw dot for 0.1
		// .add(TweenMax.to("path", 1, {stroke: "#33629c", ease:Linear.easeNone}), 0);			// change color during the whole thing

	// build scene
	// var lineHeight = (1-($(window).height()/$("body").height()))*$("body").height();
	var lineHeight = $("html").height()-($("article.menuFixHeight").height()*5.56);
	var lineTrigger = ($(".title").innerHeight()/$(window).height())+(($(".content").innerWidth()*0.08)/$(window).height());
	// console.log(lineHeight);
	// alert($("article.menuFixHeight").height()*5.56);
	var scene = new ScrollMagic.Scene({
		triggerElement: "section",
		offset: 0,
		duration: lineHeight,
		tweenChanges: true,
		triggerHook: lineTrigger,
	})
	.setTween(tween)
	// .addIndicators({ name: "svg (duration: 0)" }) // 指標顯示
	.addTo(controller);
	// svg draw end------------------------


	// // part02 start--------------------------
	// TweenMax.set('section', {opacity:0})

	// var tween2 = new TimelineMax()
	// .add(TweenMax.to('section', 1, {opacity:1, delay:1}))

	// // build scene
	// var scene2 = new ScrollMagic.Scene({
	// 	triggerElement: "section",
	// 	// duration: 100,
	// 	offset: 0, //指標位移
	// 	triggerHook: 0, // 觸發位置 0-1,onLeave,onCenter,onEnter
	// 	reverse: false, //動畫重複 default:true
	// })
	// .setTween(tween2)
	// .addIndicators({ name: "2 (duration: 0)" }) // 指標顯示
	// .addTo(controller);
	// // part02 end--------------------------
}

$(document).ready(function () {
	experienceAnimate();
});