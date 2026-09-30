// slick
$(document).ready(function () {
	$('.carousel').slick({
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToShow: 1,
		centerMode: true,
		centerPadding: 0,
		dots: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					centerMode: false,
				},
			},
		],
	});
});

//#channel表示切り替え
$('#anime').show();
$('.sub_navItem').on('click', function () {
	$('.sub_navItem').removeClass('is_active');
	$(this).addClass('is_active');
	$('.channel').hide();
	const isShow = $(this).attr('rel');
	$('#' + isShow).fadeIn();
});

// パラメータで#channelの表示を切り替える（serviceページからのリンクに対応）
const cate = getParam('cate'); // パラメータcateの値を取得
function getParam(name, url) {
	if (!url) url = window.location.href;
	name = name.replace(/[\[\]]/g, '\\$&');
	var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
		results = regex.exec(url);
	if (!results) return null;
	if (!results[2]) return '';
	return decodeURIComponent(results[2].replace(/\+/g, ' '));
}
$('.sub_navItem').each(function () {
	const item_cate = $(this).attr('rel'); // .item_cateのrel属性を取得
	if (cate === item_cate) {
		$('.sub_navItem').removeClass('is_active');
		$(this).addClass('is_active');
		$('.channel').hide();
		$('#' + cate).fadeIn();
	}
});

// アンカースクロール
$(function () {
	$('a[href^="#"]').click(function () {
		let speed = 400;
		let type = 'swing';
		let href = $(this).attr('href');
		let target = $(href == '#index' ? 'html' : href);
		let position = target.offset().top - 30;
		$('body,html').animate({ scrollTop: position }, speed, type);
		return false;
	});
});

// footer_bt
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 1000) {
		$('.footer_fix_btn').fadeIn();
	} else {
		$('.footer_fix_btn').fadeOut();
	}
});

// toTop_bt
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 1000) {
		$('.toTop').fadeIn();
	} else {
		$('.toTop').fadeOut();
	}
});

// 外部リンクは別のタブで開く
$(document).ready(function () {
	$('a').click(function (event) {
		if (this.hash.length > 0) {
			return;
		}
		$(this).attr('target', '_blank');
	});
});
