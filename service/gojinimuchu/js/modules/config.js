/**
 * 静的JSONのベースURL（末尾スラッシュ推奨）
 *
 * - 同一サーバー相対: 'json/'
 * - 別ドメイン例: 'https://cdn.example.com/gojinimuchu/json/'
 *
 * 他案件へコピーする場合も、ここだけ差し替えればOK
 */
export const JSON_BASE = 'json/';

/** @param {string} filename 例: 'tweets.json' */
export function jsonUrl(filename) {
	return `${JSON_BASE}${filename}`;
}
