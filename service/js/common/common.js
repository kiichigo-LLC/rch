// .footer_fix_btn
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 100) {
		$('.footer_fix_btn').fadeIn();
	} else {
		$('.footer_fix_btn').fadeOut();
	}
});

// TOPへ戻るボタン
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 1000) {
		$('.toTop').fadeIn();
	} else {
		$('.toTop').fadeOut();
	}
});

// アンカーリンク以外は別のタブで開く
$(document).ready(function () {
	$('a').each(function () {
		var href = $(this).attr('href');

		// href属性が存在することを確認
		if (href !== undefined && href !== null && href.trim() !== '') {
			// hrefがnullや空文字列でないことも確認

			// hrefが '#' で始まっていないことを確認
			if (!href.startsWith('#')) {
				$(this).attr('target', '_blank');
			}
		}
	});
});
