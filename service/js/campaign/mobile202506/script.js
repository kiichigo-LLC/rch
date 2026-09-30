// タブ切り替えメニュー
$('#tab2').show();
$('.tab-item').on('click', function () {
    $('.tab-item').removeClass('active');
    $(this).addClass('active');
    $('.tab-panel').hide();
    const isShow = $(this).attr('data-tab');
    $('#' + isShow).fadeIn();
})

// アンカーリンクのスクロール
$(function () {
    $('a[href^="#"]').click(function () {
        let speed = 400;
        let type = 'swing';
        let href = $(this).attr("href");
        let target = $(href == "#index" ? 'html' : href);
        let position = target.offset().top - 30;
        $('body,html').animate({ scrollTop: position }, speed, type);
        return false;
    });
});


// .footer_fix_btn
jQuery(window).on("scroll", function ($) {
    if (jQuery(this).scrollTop() > 100) {
        jQuery('.footer_fix_btn').fadeIn();
    } else {
        jQuery('.footer_fix_btn').fadeOut();
    }
});

// TOPへ戻るボタン
$(window).on("scroll", function () {
    if ($(this).scrollTop() > 1000) {
        $('.toTop').fadeIn();
    } else {
        $('.toTop').fadeOut();
    }
});

// アンカーリンク以外は別のタブで開く
$(document).ready(function () {
    $('a').each(function () {
        if ($(this).attr('href') != undefined && $(this).attr('href').indexOf('#') == -1) {
            $(this).attr('target', '_blank');
        }
    });
});