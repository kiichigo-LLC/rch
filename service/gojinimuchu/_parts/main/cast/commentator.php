<?php
	$DIR_NAME = basename(dirname(__FILE__));
	$FILE_NAME = basename(__FILE__, '.php');
	$days = [
		'mon' => '月曜',
		'tue' => '火曜',
		'wed' => '水曜',
		'thu' => '木曜',
		'fri' => '金曜',
	];
	$commentators = [
		'mon' => [
			['img' => 'wakabayashi.webp', 'name' => '若林史江'],
			['img' => 'matsuko.webp', 'name' => 'マツコ・デラックス'],
		],
		'tue' => [
			['img' => 'hokuto.webp', 'name' => '北斗晶'],
			['img' => 'iwashita.webp', 'name' => '岩下尚史'],
			['img' => 'toki.webp', 'name' => 'トキ<br>(黒船特派員)'],
		],
		'wed' => [
			['img' => 'matsuda.webp', 'name' => '松田ゆう姫'],
			['img' => 'nakamaru.webp', 'name' => '中丸雄一'],
			['img' => 'kobara.webp', 'name' => '小原プラス'],
		],
		'thu' => [
			['img' => 'nakase.webp', 'name' => '中瀬ゆかり'],
			['img' => 'iwai.webp', 'name' => '岩井志麻子'],
			['img' => 'jonathan.webp', 'name' => 'ジョナサン<br>(黒船特派員)'],
		],
		'fri' => [
			['img' => 'nakao.webp', 'name' => '中尾ミエ'],
			['img' => 'kent.webp', 'name' => 'ケント<br>(こども黒船特派員)'],
		],
	];
?>
<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?> sec-box">
	<h3 class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-ttl">コメンテーター</h3>

	<ul class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-tab js-cast-tab">
		<?php foreach ($days as $day_key => $day_label) : ?>
			<li>
				<button
					type="button"
					class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-tab-btn<?php echo $day_key === 'mon' ? ' is-active' : ''; ?>"
					data-tab="<?php echo $day_key; ?>"
					aria-selected="<?php echo $day_key === 'mon' ? 'true' : 'false'; ?>">
					<span class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-tab-label"><?php echo $day_label; ?></span>
					<arw-icon class="icon"></arw-icon>
				</button>
			</li>
		<?php endforeach; ?>
	</ul>

	<?php foreach ($days as $day_key => $day_label) : ?>
		<div
			class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-panel js-cast-panel<?php echo $day_key === 'mon' ? ' is-active' : ''; ?>"
			data-panel="<?php echo $day_key; ?>"
			<?php echo $day_key === 'mon' ? '' : 'hidden'; ?>>
			<?php foreach ($commentators[$day_key] as $person) : ?>
				<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-panel-item">
					<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-panel-item-img">
						<img
							src="./img/<?php echo $DIR_NAME; ?>/photo/<?php echo $person['img']; ?>"
							alt="<?php echo $person['name']; ?>">
					</div>
					<div class="<?php echo PROJECT_DIR; ?>-<?php echo $DIR_NAME; ?>-<?php echo $FILE_NAME; ?>-panel-item-details">
						<p><?php echo $day_label; ?> コメンテーター</p>
						<h4><?php echo $person['name']; ?></h4>
					</div>
				</div>
			<?php endforeach; ?>
		</div>
	<?php endforeach; ?>

</div>
