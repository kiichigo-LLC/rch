/**
 * キャスト：コメンテーター曜日タブ
 */
export function initCastTab() {
	const $tabs = $('.js-cast-tab');
	if (!$tabs.length) return;

	$tabs.on('click', '[data-tab]', function () {
		const $btn = $(this);
		const $root = $btn.closest('.js-cast-tab').parent();
		const key = $btn.data('tab');

		$root.find('[data-tab]').removeClass('is-active').attr('aria-selected', 'false');
		$btn.addClass('is-active').attr('aria-selected', 'true');

		$root.find('.js-cast-panel').each(function () {
			const $panel = $(this);
			const active = $panel.data('panel') === key;
			$panel.toggleClass('is-active', active);
			$panel.prop('hidden', !active);
		});
	});
}
