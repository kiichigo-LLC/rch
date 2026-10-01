/**
 * ページトップへ戻るボタン
 */
export function initPageTop() {
	const pageTop = document.getElementById('pagetop');
	if (!pageTop) return;

	const threshold = 400;

	const update = () => {
		pageTop.classList.toggle('is-show', window.scrollY > threshold);
	};

	window.addEventListener('scroll', update, { passive: true });
	update();

	pageTop.addEventListener('click', () => {
		const behavior = window.matchMedia('(prefers-reduced-motion: reduce)').matches
			? 'auto'
			: 'smooth';
		window.scrollTo({ top: 0, behavior });
	});
}
