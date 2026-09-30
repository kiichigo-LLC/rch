<?php
/***********************************************
ターミナルで該当フォルダに移動して以下コマンドを実行してください。

【一括ビルド】
------------------------------
npm run b
------------------------------
scss → css/style.css
js/main.js (+ modules) → js/script.js（圧縮）
dev.php → index.html

【監視 + ローカルサーバ】
------------------------------
npm run w
------------------------------
ビルド監視と php -S localhost:1024（ドキュメントルート: rch/）を同時起動します。
ページ: http://localhost:1024/service/gojinimuchu/
初回は npm i が必要です。
***********************************************/
$page_title = '{{ページタイトル}}';
$page_description = '{{ページ説明文（120文字程度）}}';
$page_slug = 'gojinimuchu';
$page_url = 'https://channel.rakuten.co.jp/service/' . $page_slug . '/';
$float_url = '{{フローティングボタンのリンク先URL}}';
$float_text = '{{フローティングボタンのテキスト}}';
$version = date('YmdHis');

define('PROJECT_DIR', $page_slug);
define('ASSETS_VERSION', $version);
define('PAGE_TITLE', $page_title);
define('PAGE_DESCRIPTION', $page_description);
define('PAGE_URL', $page_url);
define('PAGE_SLUG', $page_slug);
define('FLOAT_URL', $float_url);
define('FLOAT_TEXT', $float_text);
?>
<!doctype html>
<html lang="ja">
	<head>
		<meta charset="utf-8" />
		<meta http-equiv="X-UA-Compatible" content="IE=edge" />
		<meta name="viewport" content="width=device-width,initial-scale=1.0" />
		<title><?php echo PAGE_TITLE; ?> | Rチャンネル</title>
		<meta name="description" content="<?php echo PAGE_DESCRIPTION; ?>" />
		<meta name="keywords" content="Rチャンネル,楽天" />
		<link rel="canonical" href="<?php echo PAGE_URL; ?>" />
		<!-- ogp -->
		<meta property="og:url" content="<?php echo PAGE_URL; ?>" />
		<meta property="og:type" content="website" />
		<meta property="og:title" content="<?php echo PAGE_TITLE; ?> | Rチャンネル" />
		<meta property="og:description" content="<?php echo PAGE_DESCRIPTION; ?>" />
		<meta property="og:site_name" content="<?php echo PAGE_TITLE; ?> | Rチャンネル" />
		<meta property="og:image" content="<?php echo PAGE_URL; ?>img/ogp.png" />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:title" content="<?php echo PAGE_TITLE; ?> | Rチャンネル" />
		<meta name="twitter:description" content="<?php echo PAGE_DESCRIPTION; ?>" />
		<meta name="twitter:image" content="<?php echo PAGE_URL; ?>img/ogp.png" />
		<meta name="twitter:url" content="<?php echo PAGE_URL; ?>" />

		<!-- icon -->
		<meta name="application-name" content="<?php echo PAGE_TITLE; ?> | Rチャンネル" />
		<meta name="msapplication-TileColor" content="#BF0000" />
		<meta name="msapplication-square70x70logo" content="https://channel.rakuten.co.jp/service/img/tiny.png" />
		<meta name="msapplication-square150x150logo" content="https://channel.rakuten.co.jp/service/img/square.png" />
		<meta name="msapplication-wide310x150logo" content="https://channel.rakuten.co.jp/service/img/wide.png" />
		<meta name="msapplication-square310x310logo" content="https://channel.rakuten.co.jp/service/img/large.png" />
		<meta name="format-detection" content="telephone=no" />
		<link rel="shortcut icon" href="https://channel.rakuten.co.jp/service/img/favicon.ico" />
		<link rel="apple-touch-icon" href="https://channel.rakuten.co.jp/service/img/appHomeIcon.png" />

		<!-- preload（KVにpicture/webpを使う場合、PC/SP用画像をここでpreloadすると初期表示が速くなる。不要なら削除） -->
		<!-- <link rel="preload" as="image" href="img/kv-sp.webp" type="image/webp" media="(max-width: 767px)" fetchpriority="high" /> -->
		<!-- <link rel="preload" as="image" href="img/kv-pc.webp" type="image/webp" media="(min-width: 768px)" fetchpriority="high" /> -->

		<!-- css -->
		<link rel="stylesheet" href="/service/common/css/sanitize.css" />
		<link rel="stylesheet" href="/service/common/css/style.css" />
		<link rel="stylesheet" href="css/style.css?v=<?php echo ASSETS_VERSION; ?>" />

		<!-- font -->
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			rel="preload"
			href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap"
			as="style"
			onload="
				this.onload = null;
				this.rel = 'stylesheet';
			" />
		<noscript><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap" /></noscript>
		<!-- 見出し等でRakuten Sans JP Boldが必要な場合は以下を有効化 -->
		<!-- <link rel="stylesheet" href="https://channel.rakuten.co.jp/service/font/Slice_RakutenSansJP/RakutenSansJP_W_Bold/woff/RakutenSansJP_W_Bold.css" /> -->
		<!-- 明朝体（Noto Serif JP）が必要な場合は以下のfamilyを追記 -->
		<!-- family=Noto+Serif+JP:wght@200..900& を上のGoogle Fonts URLに追加する -->

		<!-- RAT tags -->
		<input type="hidden" name="rat" id="ratAccountId" value="1651" />
		<input type="hidden" name="rat" id="ratServiceId" value="1" />
		<input type="hidden" name="rat" id="ratSiteSection" value="<?php echo PAGE_SLUG; ?>" />
		<input type="hidden" name="rat" id="ratPageName" value="rchannel_<?php echo PAGE_SLUG; ?>" />
		<script type="text/javascript" src="https://r.r10s.jp/com/rat/js/rat-main.js" defer></script>
		<!-- /RAT tags-->

		<!-- MNO Banner -->
		<script src="//jp.rakuten-static.com/1/grp/banner/js/create.js" defer></script>
		<!-- /MNO Banner -->

		<script type="application/ld+json">
			{
				"@context": "https://schema.org/",
				"@type": "BreadcrumbList",
				"itemListElement": [
					{
						"@type": "ListItem",
						"position": 1,
						"name": "Rチャンネル ホーム",
						"item": "https://channel.rakuten.co.jp/"
					},
					{
						"@type": "ListItem",
						"position": 2,
						"name": "<?php echo PAGE_TITLE; ?>",
						"item": "<?php echo PAGE_URL; ?>"
					}
				]
			}
		</script>

		<!-- IEでCSSカスタムプロパティを有効にする -->
		<script>
			window.MSInputMethodContext && document.documentMode && document.write('<script src="https://cdn.jsdelivr.net/gh/nuxodin/ie11CustomProperties@4.1.0/ie11CustomProperties.min.js"><\/script>');
		</script>

		<!-- Twitter universal website tag code -->
		<script>
			!(function (e, t, n, s, u, a) {
				e.twq ||
					((s = e.twq =
						function () {
							s.exe ? s.exe.apply(s, arguments) : s.queue.push(arguments);
						}),
					(s.version = '1.1'),
					(s.queue = []),
					(u = t.createElement(n)),
					(u.async = !0),
					(u.src = '//static.ads-twitter.com/uwt.js'),
					(a = t.getElementsByTagName(n)[0]),
					a.parentNode.insertBefore(u, a));
			})(window, document, 'script');
			// Insert Twitter Pixel ID and Standard Event data below
			twq('init', 'o7ao2');
			twq('track', 'PageView');
		</script>
		<!-- End Twitter universal website tag code -->

		<!-- Google Tag Manager -->
		<script>
			(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({
					'gtm.start': new Date().getTime(),
					event: 'gtm.js',
				});
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != 'dataLayer' ? '&l=' + l : '';
				j.async = true;
				j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, 'script', 'dataLayer', 'GTM-5ZNVC95');
		</script>
		<!-- End Google Tag Manager -->

		<!-- Microsoft Clarity（アクセス解析でヒートマップ等が必要なページのみ有効化）
		<script type="text/javascript">
			(function (c, l, a, r, i, t, y) {
				c[a] =
					c[a] ||
					function () {
						(c[a].q = c[a].q || []).push(arguments);
					};
				t = l.createElement(r);
				t.async = 1;
				t.src = 'https://www.clarity.ms/tag/' + i;
				y = l.getElementsByTagName(r)[0];
				y.parentNode.insertBefore(t, y);
			})(window, document, 'clarity', 'script', 'rfn6xryirb');
		</script>
		-->
	</head>

	<body>
		<!-- PITARI Header -->
		<div id="mkdiv_header_pitari" data-phoenix-cmo_poc_test_pc></div>
		<!-- /PITARI Header -->

		<!-- Google Tag Manager (noscript) -->
		<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5ZNVC95" height="0" width="0" style="display: none; visibility: hidden"></iframe></noscript>
		<!-- End Google Tag Manager (noscript) -->

		<!-- #header -->
		<div id="header"></div>
		<!-- /#header -->

		<!-- breadcrumb -->
		<nav class="c-breadcrumb">
			<ol class="c-breadcrumb__list">
				<li class="c-breadcrumb__list-item"><a class="c-breadcrumb__list-item-link" href="/">Rチャンネル ホーム</a></li>
				<li class="c-breadcrumb__list-item"><span><?php echo PAGE_TITLE; ?></span></li>
			</ol>
		</nav>
		<!-- /breadcrumb -->

		<main>
			<?php
				include './_parts/main/kv.php';
				// include './_parts/main/intro.php';
				// セクションを追加したらここに include を追記
			?>
		</main>

		<!-- #footer -->
		<div id="footer"></div>
		<!-- /#footer -->

		<!-- フッターフローティングボタン -->
		<div class="c-float__footer js-float">
			<div class="l-wrap">
				<div class="c-float__button-container">
					<div class="c-float__button c-button">
						<a href="<?php echo FLOAT_URL; ?>" class="c-float__link c-button__link c-button__link--primary"><?php echo FLOAT_TEXT; ?></a>
					</div>
				</div>
			</div>
		</div>
		<!-- /フッターフローティングボタン -->

		<!-- #pagetop（ページ内トップへ戻るボタン） -->
		<div id="pagetop"></div>
		<!-- /#pagetop -->

		<!-- PITARI Footer -->
		<div id="mkdiv_footer_pitari" data-phoenix-cmo_poc_test_pc></div>
		<!-- /PITARI Footer -->

		<!-- PITARI対策  -->
		<div class="l-space"></div>
		<!-- /PITARI対策  -->

		<!-- js -->
		<script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous" defer></script>
		<script type="text/javascript" src="/service/common/js/header.js" defer></script>
		<script type="text/javascript" src="/service/common/js/footer.js" defer></script>
		<script type="text/javascript" src="/service/common/js/pagetop.js" defer></script>
		<script type="text/javascript" src="/service/common/js/script.js" defer></script>
		<script type="text/javascript" src="js/script.js?v=<?php echo ASSETS_VERSION; ?>" defer></script>

		<!-- header・footer・pagetop読み込み -->
		<script>
			document.addEventListener('DOMContentLoaded', function () {
				document.getElementById('header').innerHTML = headerHtml;
				document.getElementById('footer').innerHTML = footerHtml;
				document.getElementById('pagetop').innerHTML = pagetopHtml;
			});
		</script>
		<!-- /header・footer・pagetop読み込み -->
	</body>
</html>
