$(function () {

	new WOW().init();

	/*-------------------Hamburger---------------- */
	$(".hamburger").click(function () {
		$(this).toggleClass("is-active");

		if ($(this).hasClass('is-active')) {
			$('.mnu_top').slideDown(300);
		} else {
			$('.mnu_top').slideUp(300);
		}
	});

	/*-------------------Hamburger---------------- */


	/*-----------------reviews tabs---------------------*/

	$('.nav_rev > div').click(function () {
		const revId = $(this).data('rev_id')

		$('.nav_rev > div').not(this).removeClass('active')
		$(this).addClass('active')

		$('.item_rev').not(revId).removeClass('active')
		$(revId).addClass('active')
	})

	/*-----------------reviews tabs---------------------*/

	/*-----------------Yakor---------------------*/

	$('a.yakor').on('click', function (event) {
		var $anchor = $(this)
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 57
		}, {
			duration: 2000,
			specialEasing: {
				width: "linear",
				height: "easeInOutCubic"
			}
		})
		event.preventDefault()
	})

	/*-----------------Yakor---------------------*/

});