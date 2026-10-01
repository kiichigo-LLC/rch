<?php
	$DIR_NAME = basename(dirname(__FILE__));
	$FILE_NAME = basename(__FILE__, '.php');
?>
<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?> sec-box">
	<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-img">
		<picture>
			<source srcset="./img/<?php echo $DIR_NAME; ?>/<?php echo $FILE_NAME; ?>/img.webp" type="image/webp" media="(min-width: 768px)">
			<img src="./img/<?php echo $DIR_NAME; ?>/<?php echo $FILE_NAME; ?>/img_sp.webp" alt="5時に夢中!">
		</picture>
	</div>
	<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-details">
		<p>
			<strong>
				TOKYO MXで毎週月～金曜17時から生放送の<br class="nonepc">
				長年愛され続けている人気長寿番組
			</strong>
		</p>
		<p>
			『5時に夢中！』は、TOKYO MXで毎週月～金曜17時から生放送されている、三面記事から政治まで幅広いテーマを個性豊かなコメンテーターたちが本音むき出しで語り尽くす大人の情報ワイドショーで、2005年4月の放送開始以来、長年愛され続けている人気長寿番組。
		</p>
		<ol>
			<li><span><stream-icon class="ico"></stream-icon>Rチャンネル CH 108で生配信</span></li>
			<li><span><time-icon class="ico"></time-icon>毎週 月〜金曜 17:00〜放送</span></li>
		</ol>
	</div>
</div>
