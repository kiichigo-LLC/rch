// ページ固有のJS（配信タイマー、タブ切替、アコーディオン等）はここに追記する。
// 参考実装:
// - 配信タイマー・タブ切替: hakureisen/js/script.js, seireisen/js/script.js
// - アコーディオン・タブ切替の別実装: tvcpn-monthly/js/script.js, tvcpn-monthly/js/timer.js

/**
 * メインJavaScript（エントリーポイント）
 */

import { initFloat } from './modules/float.js';

document.addEventListener('DOMContentLoaded', () => {
	initFloat();
});
