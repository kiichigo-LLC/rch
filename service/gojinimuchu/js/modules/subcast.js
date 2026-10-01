import { jsonUrl } from './config.js';
import { escapeHtml, mapJoin, stripTags } from './render.js';

/**
 * サブキャスト（json/subcast.json から読み込み）
 */
export function initSubcast() {
	const list = document.querySelector('.gojinimuchu-cast-sub');
	if (!list) return;

	fetch(jsonUrl('subcast.json'))
		.then((res) => {
			if (!res.ok) throw new Error(`subcast.json: ${res.status}`);
			return res.json();
		})
		.then((people) => {
			if (!Array.isArray(people) || !people.length) return;

			list.innerHTML = mapJoin(people, (person) => `
				<div class="gojinimuchu-cast-sub-item">
					<div class="gojinimuchu-cast-sub-item-img">
						<img
							src="./img/cast/photo/${escapeHtml(person.img)}"
							alt="${escapeHtml(stripTags(person.name))}"
							width="160"
							height="160"
							loading="lazy"
							decoding="async">
					</div>
					<div class="gojinimuchu-cast-sub-item-details">
						<p>${escapeHtml(person.tag)}</p>
						<h3>${person.name ?? ''}</h3>
					</div>
				</div>
			`);
		})
		.catch((err) => {
			console.error(err);
		});
}
