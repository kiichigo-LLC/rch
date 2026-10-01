// ページ固有のJS（配信タイマー、タブ切替、アコーディオン等）はここに追記する。
// 参考実装:
// - 配信タイマー・タブ切替: hakureisen/js/script.js, seireisen/js/script.js
// - アコーディオン・タブ切替の別実装: tvcpn-monthly/js/script.js, tvcpn-monthly/js/timer.js

/**
 * メインJavaScript（エントリーポイント）
 */

import { initCastTab } from './modules/castTab.js';
import { initFixCta } from './modules/fixCta.js';
import { initPageTop } from './modules/pageTop.js';
import { initTweets } from './modules/tweets.js';
import { initPrograms } from './modules/programs.js';
import { initCommentators } from './modules/commentators.js';
import { initSubcast } from './modules/subcast.js';
import './modules/icons/index.js';

document.addEventListener('DOMContentLoaded', () => {
	initCastTab();
	initFixCta();
	initPageTop();
	initTweets();
	initPrograms();
	initCommentators();
	initSubcast();
});
