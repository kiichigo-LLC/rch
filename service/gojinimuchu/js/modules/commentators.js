import { jsonUrl } from './config.js';
import { escapeHtml, mapJoin, stripTags } from './render.js';

/**
 * コメンテーター（json/commentators.json から読み込み）
 */
export function initCommentators() {
	const root = document.querySelector('.gojinimuchu-cast-commentator');
	const tabList = root?.querySelector('.gojinimuchu-cast-commentator-tab');
	if (!root || !tabList) return;

	fetch(jsonUrl('commentators.json'))
		.then((res) => {
			if (!res.ok) throw new Error(`commentators.json: ${res.status}`);
			return res.json();
		})
		.then((days) => {
			if (!Array.isArray(days) || !days.length) return;

			root.querySelectorAll('.gojinimuchu-cast-commentator-panel').forEach((el) => el.remove());

			tabList.innerHTML = mapJoin(days, (day, index) => {
				const isActive = index === 0;
				return `
					<li role="presentation">
						<button
							type="button"
							id="cast-tab-${escapeHtml(day.key)}"
							class="gojinimuchu-cast-commentator-tab-btn${isActive ? ' is-active' : ''}"
							role="tab"
							data-tab="${escapeHtml(day.key)}"
							aria-controls="cast-panel-${escapeHtml(day.key)}"
							aria-selected="${isActive ? 'true' : 'false'}"
							tabindex="${isActive ? '0' : '-1'}">
							<span class="gojinimuchu-cast-commentator-tab-label">${escapeHtml(day.label)}</span>
							<arw-icon class="icon" aria-hidden="true"></arw-icon>
						</button>
					</li>
				`;
			});

			tabList.insertAdjacentHTML(
				'afterend',
				mapJoin(days, (day, index) => {
					const isActive = index === 0;
					return `
						<div
							id="cast-panel-${escapeHtml(day.key)}"
							class="gojinimuchu-cast-commentator-panel tab-body${isActive ? ' is-active' : ''}"
							role="tabpanel"
							aria-labelledby="cast-tab-${escapeHtml(day.key)}"
							data-panel="${escapeHtml(day.key)}"
							${isActive ? '' : 'hidden'}>
							${mapJoin(day.people, (person) => `
								<div class="gojinimuchu-cast-commentator-panel-item">
									<div class="gojinimuchu-cast-commentator-panel-item-img">
										<img
											src="./img/cast/photo/${escapeHtml(person.img)}"
											alt="${escapeHtml(stripTags(person.name))}"
											width="140"
											height="140"
											loading="lazy"
											decoding="async">
									</div>
									<div class="gojinimuchu-cast-commentator-panel-item-details">
										<p>${escapeHtml(day.label)} コメンテーター</p>
										<h4>${person.name ?? ''}</h4>
									</div>
								</div>
							`)}
						</div>
					`;
				})
			);
		})
		.catch((err) => {
			console.error(err);
		});
}
