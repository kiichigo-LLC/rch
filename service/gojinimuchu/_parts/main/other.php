<?php
	$FILE_NAME = basename(__FILE__, '.php');
?>
<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?> sec" id="<?php echo $FILE_NAME; ?>">
	<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>-inr sec-inr">

		<h2 class="sec-ttl">
			<picture>
				<source srcset="./img/<?php echo $FILE_NAME; ?>/ttl.webp" type="image/webp" media="(min-width: 768px)">
				<img src="./img/<?php echo $FILE_NAME; ?>/ttl_sp.webp" alt="TOKYO MXの他番組も配信中" loading="lazy" decoding="async">
			</picture>
			<p>
				※予定変更の場合あり。<br class="nonepc">
				※CMが映像上に挿入されますがご了承ください。
			</p>
		</h2>

		<div class="sec-cont">
			<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>-list sec-box"></div>
		</div>

	</div>
</div>
