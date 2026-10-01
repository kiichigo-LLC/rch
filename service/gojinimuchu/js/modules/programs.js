import { jsonUrl } from './config.js';
import { escapeHtml, mapJoin } from './render.js';

/**
 * 他番組一覧（programs.json から読み込み）
 */
export function initPrograms() {
	const list = document.querySelector('.gojinimuchu-other-list');
	if (!list) return;

	fetch(jsonUrl('programs.json'))
		.then((res) => {
			if (!res.ok) throw new Error(`programs.json: ${res.status}`);
			return res.json();
		})
		.then((programs) => {
			if (!Array.isArray(programs) || !programs.length) return;

			list.innerHTML = mapJoin(programs, (program) => `
				<div class="gojinimuchu-other-list-item">
					<div class="gojinimuchu-other-list-item-img">
						<img
							src="./img/other/program/${escapeHtml(program.img)}"
							alt="${escapeHtml(program.title)}"
							width="256"
							height="144"
							loading="lazy"
							decoding="async">
					</div>
					<div class="gojinimuchu-other-list-item-details">
						<h3>${escapeHtml(program.title)}</h3>
						<p>${program.time ?? ''}</p>
					</div>
				</div>
			`);
		})
		.catch((err) => {
			console.error(err);
		});
}
