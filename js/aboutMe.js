$(document).ready(function () {
	//initialize swiper when document ready
	var mySwiper = new Swiper ('.swiper-container', {
		// Optional parameters
		effect: 'coverflow',
		slidesPerView: 3.38,
		// grabCursor: true,
		centeredSlides: true,
		spaceBetween: 0,
		loop: true,
		coverflowEffect: {
			rotate: 0,
			stretch: 0,
			depth: 250,
			slideShadows : false,
		},
		autoplay: {
            delay: 2000,
            disableOnInteraction: false,
        },
	})
});