<?php
	$FILE_NAME = basename(__FILE__, '.php');
	if (!isset($GLOBALS['cta_count'])) {
		$GLOBALS['cta_count'] = 0;
	}
	$GLOBALS['cta_count']++;
	$is_first_cta = $GLOBALS['cta_count'] === 1;
	$cta_id = $is_first_cta ? ' id="' . $FILE_NAME . '"' : '';
	$ttl_tag = $is_first_cta ? 'h1' : 'p';
?>
<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>"<?php echo $cta_id; ?>>
	<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>-inr">
		<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>-details">
			<ul>
				<li><span>CH108 TOKYO MX</span></li>
				<li><span>毎週 月〜金 17:00〜配信</span></li>
			</ul>
			<<?php echo $ttl_tag; ?> class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>-ttl">
				<span>5時に夢中!</span>
			</<?php echo $ttl_tag; ?>>
			<p>
				TOKYO MXの人気番組『5時に夢中！』をRチャンネルで生配信！<br>
				スマホでもPCでも無料でご視聴いただけます。
			</p>
		</div>
		<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>-button">
			<a href="<?php echo CV_URL; ?>">
				<span><stream-icon aria-hidden="true"></stream-icon>無料で視聴する</span>
				<arw-icon aria-hidden="true"></arw-icon>
			</a>
			<ol>
				<li><span>放送日時：毎週月曜〜金曜 17:00〜18:00</span></li>
				<li><span>放送時間帯に「無料で視聴する」ボタンを押してご視聴ください。</span></li>
			</ol>
		</div>
	</div>
</div>
