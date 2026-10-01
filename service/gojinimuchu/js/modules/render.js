/**
 * HTMLテンプレート用ヘルパー（他案件でも流用可）
 */

export const stripTags = (html) => String(html ?? '').replace(/<[^>]*>/g, '');

export const escapeHtml = (value) =>
	String(value ?? '')
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;')
		.replace(/'/g, '&#39;');

/** 配列をHTML文字列にマップして結合 */
export const mapJoin = (list, fn) => (Array.isArray(list) ? list.map(fn).join('') : '');
