import { jsonUrl } from './config.js';
import { escapeHtml, mapJoin } from './render.js';

/**
 * 公式X埋め込み（tweets.json から読み込み）
 */
export function initTweets() {
	const slide = document.querySelector('.gojinimuchu-about-two-slide');
	if (!slide) return;

	fetch(jsonUrl('tweets.json'))
		.then((res) => {
			if (!res.ok) throw new Error(`tweets.json: ${res.status}`);
			return res.json();
		})
		.then((tweets) => {
			if (!Array.isArray(tweets) || !tweets.length) return;

			slide.innerHTML = mapJoin(tweets, (url) => `
				<div class="gojinimuchu-about-two-slide-item">
					<blockquote class="twitter-tweet" data-dnt="true">
						<a href="${escapeHtml(url)}"></a>
					</blockquote>
				</div>
			`);

			if (window.twttr?.widgets?.load) {
				window.twttr.widgets.load(slide);
			} else {
				const script = document.createElement('script');
				script.src = 'https://platform.x.com/widgets.js';
				script.async = true;
				script.charset = 'utf-8';
				document.body.appendChild(script);
			}
		})
		.catch((err) => {
			console.error(err);
		});
}
