$(function() {

	$('.slider__inner').slick({
		slidesToShow: 6,
		centerMode: true,
		autoplay: true,
  	autoplaySpeed: 3000,
  	arrows: false
	});

	var mixer = mixitup('.dishes__content');

});