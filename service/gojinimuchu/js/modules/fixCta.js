/**
 * 固定CTA：一番上の #cta が消えたら表示、#footer が見えたら非表示
 */
export function initFixCta() {
	const fixCta = document.getElementById('fix_cta');
	const topCta = document.getElementById('cta');
	const footer = document.getElementById('footer');
	if (!fixCta || !topCta || !footer) return;

	let ctaVisible = true;
	let footerVisible = false;

	const update = () => {
		fixCta.classList.toggle('is-show', !ctaVisible && !footerVisible);
	};

	const ctaObserver = new IntersectionObserver(
		([entry]) => {
			ctaVisible = entry.isIntersecting;
			update();
		},
		{ threshold: 0 }
	);

	const footerObserver = new IntersectionObserver(
		([entry]) => {
			footerVisible = entry.isIntersecting;
			update();
		},
		{ threshold: 0 }
	);

	ctaObserver.observe(topCta);
	footerObserver.observe(footer);
	update();
}
