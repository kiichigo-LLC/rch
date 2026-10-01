<?php
	$DIR_NAME = basename(dirname(__FILE__));
	$FILE_NAME = basename(__FILE__, '.php');
?>
<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?> sec-box">
	<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-details">
		<p class="tag">
			<span><tag-icon class="ico"></tag-icon>もっと知りたい方へ</span>
		</p>
		<p>
			『5時に夢中！』の新着ニュースを見るなら<br class="nonesp">
			<b>”TOKYO MX+(プラス)”</b>
		</p>
		<p>
			<small>
				TOKYO MXが発信するメディアサイト「TOKYO MX＋」。<br>
				MXの最新情報、最新のエンタメ情報、番組情報、出演者・ゲスト情報などTOKYO MXに関するオリジナル情報を毎日配信！
			</small>
		</p>
	</div>
	<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-cv">
		<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-cv-img">
			<img src="./img/<?php echo $DIR_NAME; ?>/<?php echo $FILE_NAME; ?>/logo.webp" alt="TOKYO MX" loading="lazy">
		</div>
		<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-cv-link">
			<a href="<?php echo PAGE_URL; ?>">
				<span><blank-icon class="ico"></blank-icon>TOKYO MX+を見てみる</span>
			</a>
		</div>
	</div>
</div>
