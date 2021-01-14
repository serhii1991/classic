$(function() {

	$('.slider__inner').slick({
		slidesToShow: 6,
		centerMode: true,
		autoplay: true,
  	autoplaySpeed: 3000,
		arrows: false,
		responsive: [
			{
				breakpoint: 1701,
				settings: {
					slidesToShow: 5
				}
			},
			{
				breakpoint: 1441,
				settings: {
					slidesToShow: 4
				}
			},
			{
				breakpoint: 1130,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 891,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1
				}
			},
			{
				breakpoint: 400,
				settings: {
					destroy: 'slick'
				}
			}
		]
	});

	$('.header__menu-btn').on('click', function() {
		$('.header__menu-list').slideToggle();
	});

	var mixer = mixitup('.dishes__content');

});