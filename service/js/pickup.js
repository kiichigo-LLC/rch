var touch = 'ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
if(touch) {
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
$(function() {
});
$(window).on('load', function() {
    // page scroll
    const urlHash = location.hash;
    if ($(urlHash).length) {
        var position = $(urlHash).offset().top - 40;
        $('html,body')
            .animate({scrollTop: position}, 600);
        $(urlHash).find('input.toggle')
            .delay(300)
            .prop("checked",true);
    }
    // Find the height of the item.
    $('.boxPickupItem').each(function(index) {
        const itemHeight = $(this).find('.innerBoxTxt').outerHeight();
        const boxHeight = 170;
        if( boxHeight >= itemHeight) {
            $(this).addClass('small');
        }
    });
});
$(window).resize(function() {
    // Find the height of the item.
    $('.boxPickupItem').each(function(index) {
        const itemHeight = $(this).find('.innerBoxTxt').outerHeight();
        const boxHeight = 170;
        if( boxHeight >= itemHeight) {
            $(this).addClass('small');
        }
    });
});
