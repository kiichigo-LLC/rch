// TOPへ戻るボタン
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 1000) {
		$('.js-pagetop').fadeIn();
	} else {
		$('.js-pagetop').fadeOut();
	}
});
