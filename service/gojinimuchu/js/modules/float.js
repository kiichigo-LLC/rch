/**
 * フッターフローティングボタン
 */
export function initFloat() {
	$(window).on('scroll', function () {
		if ($(this).scrollTop() > 100) {
			$('.js-float').fadeIn();
		} else {
			$('.js-float').fadeOut();
		}
	});
}
