<?php
	$DIR_NAME = basename(dirname(__FILE__));
	$FILE_NAME = basename(__FILE__, '.php');
	$tweets = [
		'https://x.com/gojimu/status/2105193446327947515',
		'https://x.com/gojimu/status/2105193446327947515',
		'https://x.com/gojimu/status/2105193446327947515',
	];
?>
<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?> sec-box">
	<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-ttl">
		<spkr-icon class="icon"></spkr-icon><span><b>「5時に夢中！」公式X</b>も要CHECK!</span>
	</div>
	<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-slide">
		<?php foreach ($tweets as $tweet_url) : ?>
			<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-slide-item">
				<blockquote class="twitter-tweet" data-dnt="true">
					<a href="<?php echo htmlspecialchars($tweet_url, ENT_QUOTES, 'UTF-8'); ?>"></a>
				</blockquote>
			</div>
		<?php endforeach; ?>
	</div>
	<script async src="https://platform.x.com/widgets.js" charset="utf-8"></script>
</div>
