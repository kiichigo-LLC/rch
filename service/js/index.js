var data = {
	genreList: [
		{
			id: 'all',
			name: 'すべて',
		},
		{
			id: 'animation',
			name: 'アニメ',
		},
		{
			id: 'asia',
			name: 'アジア',
		},
		{
			id: 'variety',
			name: 'バラエティ',
		},
		{
			id: 'cinemaDrama',
			name: '映画・ドラマ',
		},
		{
			id: 'kids',
			name: 'キッズ',
		},
		// {
		//     id: "fashion",
		//     name: "ファッション"
		// },
		{
			id: 'news',
			name: 'ニュース',
		},
		{
			id: 'sports',
			name: 'スポーツ',
		},
		{
			id: 'documentary',
			name: 'ドキュメンタリー',
		},
		{
			id: 'travel',
			name: '鉄道・旅',
		},
		{
			id: 'hobby',
			name: '趣味',
		},
		{
			id: 'music',
			name: '音楽',
		},
	],
};
$('#items').append($('#tmpl').render(data));
// Page Navigation
$('.pageNavigation a').on('click', function () {
	onePageNav('.js-curnav-switch');
	var elmHash = $(this).attr('href');
	var pos = Math.round($(elmHash).offset().top - 70);
	$('body,html').animate(
		{
			scrollTop: pos,
		},
		500,
	);
	return false;
});
// .pageNavigation
function onePageNav(switchName) {
	const navSwitch = $(switchName);
	const deductHeight = 90;
	let navArr = [];

	navSwitch.each(function (i) {
		let navSwitchHref = $(this).attr('href');
		let tgtOff = $(navSwitchHref).offset().top - deductHeight;
		navArr.push([]);
		navArr[i].switch = $(this);
		navArr[i].tgtOff = tgtOff;
	});

	$(window).scroll(function () {
		const navSwitch = $(switchName);
		const deductHeight = 90;
		let navArr = [];
		navSwitch.each(function (i) {
			let navSwitchHref = $(this).attr('href');
			let tgtOff = $(navSwitchHref).offset().top - deductHeight;
			navArr.push([]);
			navArr[i].switch = $(this);
			navArr[i].tgtOff = tgtOff;
		});

		for (let i = 0; i < navArr.length; i++) {
			let scroll = $(window).scrollTop();
			let tgtKey = navArr[i];
			let tgtSwitch = tgtKey.switch;
			let tgtOff = tgtKey.tgtOff;
			if (scroll > tgtOff) {
				navSwitch.removeClass('current');
				tgtSwitch.addClass('current');
			} else {
				tgtSwitch.removeClass('current');
			}
		}
	});
}
$(window).on('load resize', function () {
	onePageNav('.js-curnav-switch');
	$('.itemList > li').addClass('position');
});
$(function () {
	onePageNav('.js-curnav-switch');
});
// Channel List
$(window).on('load', function () {
	var grid = new Muuri('.grid', {
		showDuration: 400,
		showEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
		hideDuration: 400,
		hideEasing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',

		visibleStyles: {
			opacity: '1',
			transform: 'scale(1)',
		},
		hiddenStyles: {
			opacity: '0',
			transform: 'scale(0.5)',
		},
	});
	// Sort Button
	$('.sort-btn li').on('click', function () {
		onePageNav('.js-curnav-switch');
		$('.sort-btn .active').removeClass('active');
		var className = $(this).attr('class');
		className = className.split(' ');
		$('.' + className[0]).addClass('active');
		if (className[0] == 'all') {
			grid.show('');
		} else {
			grid.filter('.' + className[0]);
		}
	});
});

var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
if (touch) {
	try {
		for (var si in document.styleSheets) {
			var styleSheet = document.styleSheets[si];
			if (!styleSheet.rules) continue;

			for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
				if (!styleSheet.rules[ri].selectorText) continue;

				if (styleSheet.rules[ri].selectorText.match(':hover')) {
					styleSheet.deleteRule(ri);
				}
			}
		}
	} catch (ex) {}
}
$(function () {
	if ($('a[href^="#"]').length) {
		$('a[href^="#"]').click(function () {
			$('html,body').animate(
				{
					scrollTop: $($(this).attr('href')).offset().top - 60,
				},
				'normal',
				'swing',
			);
			return false;
		});
	}
});
// slick
$(window).on('load', function () {
	if ($('a[href^="#"]').length) {
		$('a[href^="#"]').click(function () {
			$('html,body').animate(
				{
					scrollTop: $($(this).attr('href')).offset().top - 60,
				},
				'normal',
				'swing',
			);
			return false;
		});
	}
	$('.slider').slick({
		// autoplay:true,
		autoplaySpeed: 5000,
		dots: true,
		centerMode: false,
		slidesToShow: 5,
		slidesToScroll: 5,
		adaptiveHeight: true,
		lazyLoad: 'ondemand',
		// responsive
		responsive: [
			{
				breakpoint: 960,
				settings: {
					centerMode: false,
					slidesToShow: 4,
					slidesToScroll: 4,
					dots: true,
				},
			},
			{
				breakpoint: 700,
				settings: {
					centerMode: false,
					slidesToShow: 3,
					slidesToScroll: 3,
					dots: true,
				},
			},
			{
				breakpoint: 540,
				settings: {
					centerMode: false,
					slidesToShow: 2,
					slidesToScroll: 2,
					dots: false,
				},
			},
			{
				breakpoint: 480,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					slidesToScroll: 1,
					dots: false,
				},
			},
		],
	});
});

//SPのみslick適用
// $(function () {
// 	function sliderSetting() {
// 		var width = $(window).width();

// 		if (width <= 767) {
// 			$('.js-slider').not('.slick-initialized').slick({
// 				centerMode: true,
// 				centerPadding: '8%',
// 				slidesToShow: 1,
// 				autoplay: true,
// 				dots: true,
// 				dotsClass: 'dots-wrap', //dotsにclass名を付与
// 				// arrows: true,
// 				// prevArrow: '<img src="img/preview_arrow.png" class="slide-arrow prev-arrow">', //arrowカスタマイズ
// 				// nextArrow: '<img src="img/next_arrow.png" class="slide-arrow next-arrow">',
// 			});
// 		} else {
// 			$('.carousel.slick-initialized').slick('unslick');
// 		}
// 	}

// 	sliderSetting();

// 	$(window).resize(function () {
// 		sliderSetting();
// 	});
// });

$(function () {
	$('.js-slider').slick({
		slidesToShow: 3,
		autoplay: true,
		dots: true,
		dotsClass: 'dots-wrap', //dotsにclass名を付与
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					centerPadding: '12%',
				},
			},
		],
	});
});

// accordion
$(window).on('load', function () {
	var UA = window.navigator.userAgent.toLowerCase();
	if (UA.indexOf('iphone') != -1) {
		var uaFiltered = 'sp';
	} else if (UA.indexOf('ipad') != -1) {
		var uaFiltered = 'tablet';
	} else if (UA.indexOf('android') != -1) {
		if (UA.indexOf('mobile') != -1) {
			var uaFiltered = 'sp';
		} else {
			var uaFiltered = 'tablet';
		}
	} else {
		var uaFiltered = 'pc';
	}

	// if(uaFiltered == 'sp'){
	// $('#accordionPanel > dt').toggleClass("accordionPanelLabel__active");
	// $('#accordionPanel > dd').toggleClass("accordionPanelItem__close").hide();
	// }
	$('#accordionPanel > dt').click(function (e) {
		$('+dd', this).toggleClass('accordionPanelItem__close').slideToggle(500);
		$(this).toggleClass('accordionPanelLabel__active');
	});

	// cp_flag:キャンペーン実施判定 true=バナー掲示 false=バナー無し
	var cp_flag = false;
	// cp_tag:キャンペーン用ファイルディレクトリ 画像/html共に同じディレクトリ名を使う
	var cp_tag = 'point20220810';
	// cp+title:キャンペーン名 altタグにセットされる
	var cp_title = '条件達成で先着1,000名様に楽天ポイント最大3,000円分プレゼント';
	var cp_html = '<div class="boxBnrTop"><ul><li><a href="./static/campaign/' + cp_tag + '/"><picture><source media="(min-width:481px)" srcset="./img/static/campaign/' + cp_tag + '/bnr_campaign_pc.png"><source media="(max-width:480px)" srcset="./img/static/campaign/' + cp_tag + '/bnr_campaign_sp.png"><img src="./img/static/campaign/' + cp_tag + '/bnr_campaign_pc.png" alt="' + cp_title + '" loading="lazy"></picture></a></li></ul></div><!-- /.boxBnrTop -->';
	if (cp_flag == true) {
		$('.mainVisual').after(cp_html);
	}
	//ハッシュついてる場合ターゲットに遷移
	var hash = $(location).attr('hash');
	if (hash) {
		var tgt = $(hash).offset().top;
		var target = tgt - 60;
		$('html,body').animate({ scrollTop: target }, 'slow');
	}
});

// //generate script tag
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// //iframe and player
// var player;
// function onYouTubeIframeAPIReady() {
//   player = new YT.Player('ytMovie', {
//     videoId: 'NCMKelVPhaY',
//     height: '360',
//     width: '640',
//     playerVars: {
//       controls: 1,
//       autoplay: 1,
//       disablekb:1,
//       enablejsapi: 1,
//       iv_load_policy: 3,
//       playsinline: 1,
//       rel: 0,
//       autohide:0,
//       modestbranding:1,
//       mute:1,
//       loop:1,
//       playlist:"NCMKelVPhaY"
//     },
//     events: {
//       'onReady': onPlayerReady,
//       'onStateChange': onPlayerStateChange
//     }
//   });
// }

// //Load YouTube API
// function onPlayerReady(event) {
//   event.target.mute();
//   event.target.playVideo();
// }

// //State Control
// function onPlayerStateChange(event) {
//   var ytStatus = event.target.getPlayerState();
//   if (ytStatus == YT.PlayerState.ENDED) {
//     player.mute();
//     player.playVideo();
//   }
// }

// const mute = document.getElementById("mute");
// mute.addEventListener("click",function(){
//     if(player.isMuted() == true) {
//         $(this).toggleClass('muteBtn__off');
//         player.unMute();
//     }
//     else {
//         $(this).toggleClass('muteBtn__off');
//         player.mute();
//     }
// });

// フッターフローティングボタン
$(window).on('scroll', function () {
	if ($(this).scrollTop() > 100) {
		$('.js-float').fadeIn();
	} else {
		$('.js-float').fadeOut();
	}
});
jQuery(window).on('scroll', function ($) {
	if (jQuery(this).scrollTop() > 100) {
		jQuery('.footer_fix_btn').fadeIn();
	} else {
		jQuery('.footer_fix_btn').fadeOut();
	}
});
// jQuery('.footer_fix_btn').click(function() {
//     jQuery('body,html').animate({
//         scrollTop: 0
//     }, 500);
//     return false;
// });
