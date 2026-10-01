<?php
	$DIR_NAME = basename(dirname(__FILE__));
	$FILE_NAME = basename(__FILE__, '.php');
	$subcast = [
		[
			'img' => 'aoi.webp',
			'tag' => '金曜 メインMC',
			'name' => '青井 実',
		],
		[
			'img' => 'oshima.webp',
			'tag' => 'メインMC',
			'name' => '大島 由香里',
		],
		[
			'img' => 'mittsu.webp',
			'tag' => 'メインMC',
			'name' => 'ミッツ・<br>マングローブ',
		],
	];
?>
<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?> sec-box">
	<?php foreach ($subcast as $subcast) : ?>
		<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-item">
			<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-item-img">
				<img
					src="./img/<?php echo $DIR_NAME; ?>/photo/<?php echo $subcast['img']; ?>"
					alt="<?php echo $subcast['name']; ?>">
			</div>
			<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-item-details">
				<p>
					<?php echo $subcast['tag']; ?>
				</p>
				<h3><?php echo $subcast['name']; ?></h3>
			</div>
		</div>
	<?php endforeach; ?>
</div>
