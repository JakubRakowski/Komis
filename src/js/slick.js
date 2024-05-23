$(document).ready(function () {
	$('.offers-boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		mobileFirst: true,
	})
})
$(document).ready(function () {
	$('.rent-boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		mobileFirst: true,
		// responsive: [
		//     {
		//       breakpoint: 992,
		//       settings: {
		//         arrows: false,
		//         slidesToShow: 2
		//       }
		//     },
		// ]
	})
})
$(document).ready(function () {
	$('.rent-boxes-img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2500,
		arrows: false,
		mobileFirst: true,
	})
})
$(document).ready(function () {
	$('.box-img').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					arrows: false,
				},
			},
			{
				breakpoint: 991,
				settings: {
					arrows: false,
					asNavFor: '.nav-box-img',
				},
			},
		],
	})
})
$(document).ready(function () {
	$('.nav-box-img').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		asNavFor: '.box-img',
		focusOnSelect: true,
		arrows: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 991,
				settings: {
					arrows: true,
				},
			},
		],
	})
})
