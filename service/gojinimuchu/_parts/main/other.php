<?php
	$FILE_NAME = basename(__FILE__, '.php');
	$programs = [
		[
			'img' => 'wakeup7.webp',
			'title' => 'Wake Up 7',
			'time' => '月～金曜 7:00～7:30',
		],
		[
			'img' => 'news.webp',
			'title' => 'TOKYO MX NEWS',
			'time' => '月～金曜 11:00～・13:00～・15:00～',
		],
		[
			'img' => 'hiho.webp',
			'title' => '配信報道局 ハイホー！',
			'time' => '火・金曜 12:00～12:30 ／<br>
			再配信 14:00～※・16:00～・18:00～<br>
			※「都知事定例会見」放送時は休止',
		],
		[
			'img' => 'livejunction.webp',
			'title' => '堀潤 Live Junction',
			'time' => '月～金曜 19:57～20:57',
		],
		[
			'img' => 'tochiji.webp',
			'title' => '都知事定例会見',
			'time' => '金曜 13:59～14:30',
		],
		[
			'img' => 'gekironsummit.webp',
			'title' => '激論サミット',
			'time' => '随時配信',
		],
		[
			'img' => 'wakeup7.webp',
			'title' => 'Wake Up 7',
			'time' => '土・日曜 12:55～・17:55～',
		],
	];
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
			<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>-list sec-box">
				<?php foreach ($programs as $program) : ?>
					<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>-list-item">
						<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>-list-item-img">
							<img
								src="./img/<?php echo $FILE_NAME; ?>/program/<?php echo $program['img']; ?>"
								alt="<?php echo $program['title']; ?>"
								width="256"
								height="144"
								loading="lazy"
								decoding="async">
						</div>
						<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>-list-item-details">
							<h3><?php echo $program['title']; ?></h3>
							<p>
								<?php echo $program['time']; ?>
							</p>
						</div>
					</div>
				<?php endforeach; ?>
			</div>
		</div>

	</div>
</div>
