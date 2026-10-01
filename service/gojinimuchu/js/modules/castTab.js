/**
 * キャスト：コメンテーター曜日タブ
 */
export function initCastTab() {
	const tabs = document.querySelectorAll('.tab');
	if (!tabs.length) return;

	tabs.forEach((tabList) => {
		const root = tabList.parentElement;
		if (!root) return;

		const buttons = () => [...tabList.querySelectorAll('[role="tab"]')];

		const activate = (btn) => {
			const key = btn.dataset.tab;

			buttons().forEach((el) => {
				const active = el === btn;
				el.classList.toggle('is-active', active);
				el.setAttribute('aria-selected', active ? 'true' : 'false');
				el.tabIndex = active ? 0 : -1;
			});

			root.querySelectorAll('.tab-body').forEach((panel) => {
				const active = panel.dataset.panel === key;
				panel.classList.toggle('is-active', active);
				panel.hidden = !active;
			});

			btn.focus();
		};

		tabList.addEventListener('click', (event) => {
			const btn = event.target.closest('[role="tab"]');
			if (!btn || !tabList.contains(btn)) return;
			activate(btn);
		});

		tabList.addEventListener('keydown', (event) => {
			const items = buttons();
			const current = event.target.closest('[role="tab"]');
			if (!current || !tabList.contains(current)) return;

			const index = items.indexOf(current);
			if (index < 0) return;

			let next = -1;
			if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
				next = (index + 1) % items.length;
			} else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
				next = (index - 1 + items.length) % items.length;
			} else if (event.key === 'Home') {
				next = 0;
			} else if (event.key === 'End') {
				next = items.length - 1;
			} else {
				return;
			}

			event.preventDefault();
			activate(items[next]);
		});
	});
}
