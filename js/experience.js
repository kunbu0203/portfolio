function experienceAnimate(){
	var controller = new ScrollMagic.Controller();

	// part01 start--------------------------
	TweenMax.set('section', {opacity:0})
	TweenMax.set('.arrowLine', {opacity:0})

	var tween1 = new TimelineMax()
	.add(TweenMax.to('section', 1, {opacity:1, delay:1}))
	.add(TweenMax.to('.arrowLine', .5, {opacity:1}))

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

	// prepare SVG
	pathPrepare($line);
	pathPrepare($arrow);

	// init controller
	// var controller = new ScrollMagic.Controller();

	// build tween
	var tweenSVG = new TimelineMax()
		.add(TweenMax.to($line, 0.95, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
		.add(TweenMax.to($arrow, 0.05, {strokeDashoffset: .0, ease:Linear.easeNone}))  // draw dot for 0.1

	// build scene
	var lineHeight = $("html").height()-($("article.menuFixHeight").height()*5.56);
	var lineTrigger = ($(".title").innerHeight()/$(window).height())+(($(".content").innerWidth()*0.08)/$(window).height());
	// var lineHeight = (1-($(window).height()/$("body").height()))*$("body").height();
	// console.log(lineHeight);
	// alert($("article.menuFixHeight").height()*5.56);

	var sceneSVG = new ScrollMagic.Scene({
		triggerElement: "section",
		offset: 0,
		duration: lineHeight,
		tweenChanges: true,
		triggerHook: lineTrigger,
		reverse: false, //動畫重複 default:true
	})
	.setTween(tweenSVG)
	// .addIndicators({ name: "svg (duration: 0)" }) // 指標顯示
	.addTo(controller);
	// svg draw end------------------------


	// part University start--------------------------
	TweenMax.set('.university .circle', {scale:0})
	TweenMax.set('.university .txt p', {opacity:0})
	TweenMax.set('.university .txt h4', {opacity:0})
	TweenMax.set('.university .building', {scaleY:0})

	var tweenUniversity = new TimelineMax()
	.add(TweenMax.to('.university .circle', 1.5, {scale:1, ease:Elastic.easeOut.config(1, 0.5)}))
	.add(TweenMax.to('.university .txt p', .5, {opacity:1, delay:-1}))
	.add(TweenMax.to('.university .txt h4', .5, {opacity:1, delay:-1}))
	.add(TweenMax.to('.university .building', 1, {scaleY:1, delay:-1, transformOrigin:"50% bottom", ease:Elastic.easeOut.config(1, 0.8)}))

	// build scene
	if (window.innerWidth<641) {
		var university = lineHeight*0.09;
	} else {
		var university = lineHeight*0.12;
	}
	var sceneUniversity = new ScrollMagic.Scene({
		triggerElement: "section",
		// duration: 100,
		offset: university, //指標位移
		triggerHook: lineTrigger, // 觸發位置 0-1,onLeave,onCenter,onEnter
		reverse: false, //動畫重複 default:true
	})
	.setTween(tweenUniversity)
	// .addIndicators({ name: "university (duration: 0)" }) // 指標顯示
	.addTo(controller);
	// part University end--------------------------

	// part ClothingArtEditor start--------------------------
	TweenMax.set('.clothingArtEditor .circle', {scale:0})
	TweenMax.set('.clothingArtEditor .txt p', {opacity:0})
	TweenMax.set('.clothingArtEditor .txt h4', {opacity:0})
	TweenMax.set('.clothingArtEditor .building', {scaleY:0})

	var tweenClothingArtEditor = new TimelineMax()
	.add(TweenMax.to('.clothingArtEditor .circle', 1.5, {scale:1, ease:Elastic.easeOut.config(1, 0.5)}))
	.add(TweenMax.to('.clothingArtEditor .txt p', .5, {opacity:1, delay:-1}))
	.add(TweenMax.to('.clothingArtEditor .txt h4', .5, {opacity:1, delay:-1}))
	.add(TweenMax.to('.clothingArtEditor .building', 1, {scaleY:1, delay:-1, transformOrigin:"50% bottom", ease:Elastic.easeOut.config(1, 0.8)}))

	// build scene
	if (window.innerWidth<641) {
		var clothingArtEditor = lineHeight*0.32;
	} else {
		var clothingArtEditor = lineHeight*0.27;
	}
	var sceneClothingArtEditor = new ScrollMagic.Scene({
		triggerElement: "section",
		// duration: 100,
		offset: clothingArtEditor, //指標位移
		triggerHook: lineTrigger, // 觸發位置 0-1,onLeave,onCenter,onEnter
		reverse: false, //動畫重複 default:true
	})
	.setTween(tweenClothingArtEditor)
	// .addIndicators({ name: "clothingArtEditor (duration: 0)" }) // 指標顯示
	.addTo(controller);
	// part ClothingArtEditor end--------------------------

	// part webDesigner start--------------------------
	TweenMax.set('.webDesigner .circle', {scale:0})
	TweenMax.set('.webDesigner .txt p', {opacity:0})
	TweenMax.set('.webDesigner .txt h4', {opacity:0})
	TweenMax.set('.webDesigner .building', {scaleY:0})

	var tweenWebDesigner = new TimelineMax()
	.add(TweenMax.to('.webDesigner .circle', 1.5, {scale:1, ease:Elastic.easeOut.config(1, 0.5)}))
	.add(TweenMax.to('.webDesigner .txt p', .5, {opacity:1, delay:-1}))
	.add(TweenMax.to('.webDesigner .txt h4', .5, {opacity:1, delay:-1}))
	.add(TweenMax.to('.webDesigner .building', 1, {scaleY:1, delay:-1, transformOrigin:"50% bottom", ease:Elastic.easeOut.config(1, 0.8)}))

	// build scene
	if (window.innerWidth<641) {
		var webDesigner = lineHeight*0.52;
	} else if (window.innerWidth<1041) {
		var webDesigner = lineHeight*0.53;
	} else {
		var webDesigner = lineHeight*0.59;
	}
	var sceneWebDesigner = new ScrollMagic.Scene({
		triggerElement: "section",
		// duration: 100,
		offset: webDesigner, //指標位移
		triggerHook: lineTrigger, // 觸發位置 0-1,onLeave,onCenter,onEnter
		reverse: false, //動畫重複 default:true
	})
	.setTween(tweenWebDesigner)
	// .addIndicators({ name: "webDesigner (duration: 0)" }) // 指標顯示
	.addTo(controller);
	// part webDesigner end--------------------------

	// part digitalDesigner start--------------------------
	TweenMax.set('.digitalDesigner .circle', {scale:0})
	TweenMax.set('.digitalDesigner .txt p', {opacity:0})
	TweenMax.set('.digitalDesigner .txt h4', {opacity:0})
	TweenMax.set('.digitalDesigner .building', {scaleY:0})

	var tweenDigitalDesigner = new TimelineMax()
	.add(TweenMax.to('.digitalDesigner .circle', 1.5, {scale:1, ease:Elastic.easeOut.config(1, 0.5)}))
	.add(TweenMax.to('.digitalDesigner .txt p', .5, {opacity:1, delay:-1}))
	.add(TweenMax.to('.digitalDesigner .txt h4', .5, {opacity:1, delay:-1}))
	.add(TweenMax.to('.digitalDesigner .building', 1, {scaleY:1, delay:-1, transformOrigin:"50% bottom", ease:Elastic.easeOut.config(1, 0.8)}))

	// build scene
	var digitalDesigner = lineHeight*0.75;
	var sceneDigitalDesigner = new ScrollMagic.Scene({
		triggerElement: "section",
		// duration: 100,
		offset: digitalDesigner, //指標位移
		triggerHook: lineTrigger, // 觸發位置 0-1,onLeave,onCenter,onEnter
		reverse: false, //動畫重複 default:true
	})
	.setTween(tweenDigitalDesigner)
	// .addIndicators({ name: "digitalDesigner (duration: 0)" }) // 指標顯示
	.addTo(controller);
	// part digitalDesigner end--------------------------
}

$(document).ready(function () {
	experienceAnimate();
});