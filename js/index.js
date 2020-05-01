function doAnimate(){
	var controller = new ScrollMagic.Controller();

	// part01 start--------------------------

	TweenMax.set('section.banner', {opacity:0})
	TweenMax.set('section.banner .grove img', {y:400, opacity:0})
	TweenMax.set('section.banner .one0one img', {y:400, opacity:0})
	TweenMax.set('section.banner .buildings img', {y:400, opacity:0})
	TweenMax.set('section.banner .mountainCableCar img', {y:400, opacity:0})
	TweenMax.set('section.banner .mountainCow img', {y:400, opacity:0})
	TweenMax.set('section.banner .bigCloud img', {y:400, opacity:0})

	var tween1 = new TimelineMax()
	.add(TweenMax.to('section.banner', 1, {opacity:1, delay:.5, ease:Power1.easeOut}))
	.add(TweenMax.to('section.banner .grove img', 3, {y:0, opacity:1, delay:-.5, ease:Elastic.easeOut.config(1, 0.8)}))
	.add(TweenMax.to('section.banner .mountainCableCar img', 3, {y:0, opacity:1, delay:-3, ease:Elastic.easeOut.config(1, 0.8)}))
	.add(TweenMax.to('section.banner .one0one img', 3, {y:0, opacity:1, delay:-2.5, ease:Elastic.easeOut.config(1, 0.8)}))
	.add(TweenMax.to('section.banner .mountainCow img', 3, {y:0, opacity:1, delay:-3, ease:Elastic.easeOut.config(1, 0.8)}))
	.add(TweenMax.to('section.banner .buildings img', 3, {y:0, opacity:1, delay:-2.5, ease:Elastic.easeOut.config(1, 0.8)}))
	.add(TweenMax.to('section.banner .bigCloud img', 3, {y:0, opacity:1, delay:-3, ease:Elastic.easeOut.config(1, 0.8)}))

	// build scene
	var scene1 = new ScrollMagic.Scene({
		triggerElement: "article",
	//   duration: 500,
		offset: 0, //指標位移
		triggerHook: 0, // 觸發位置 0-1,onLeave,onCenter,onEnter
		reverse: false, //動畫重複 default:true
	})
		.setTween(tween1)
		// .addIndicators({ name: "1 (duration: 0)" }) // 指標顯示
		.addTo(controller);
	// part01 end--------------------------
}

consoleText([' Pon !', ' a Front-end Engineer.'], 'text');

function consoleText(words, id) {
	var visible = true;
	var con = document.getElementById('console');
	var letterCount = 1;
	var x = 1;
	var waiting = false;
	var target = document.getElementById(id)
	window.setInterval(function() {

	if (letterCount === 0 && waiting === false) {
		waiting = true;
		target.innerHTML = words[0].substring(0, letterCount)
		window.setTimeout(function() {
			var usedWord = words.shift();
			words.push(usedWord);
			x = 1;
			letterCount += x;
			waiting = false;
		}, 1000)
		} else if (letterCount === words[0].length + 1 && waiting === false) {
		waiting = true;
		window.setTimeout(function() {
			x = -1;
			letterCount += x;
			waiting = false;
		}, 1000)
		} else if (waiting === false) {
		target.innerHTML = words[0].substring(0, letterCount)
		letterCount += x;
		}
	}, 120)
	window.setInterval(function() {
		if (visible === true) {
		con.className = 'console-underscore hidden'
		visible = false;

		} else {
		con.className = 'console-underscore'

		visible = true;
		}
	}, 400)
}


$(document).ready(function () {
	var scene = document.getElementById('scene');
	var parallaxInstance = new Parallax(scene);
	
	doAnimate()
});
