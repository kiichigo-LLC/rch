<?php
	$FILE_NAME = basename(__FILE__, '.php');
	$PARTS_DIR = './_parts/main/' . $FILE_NAME;
?>
<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?> sec" id="<?php echo $FILE_NAME; ?>">
	<div class="<?php echo PROJECT_DIR; ?>-<?php echo $FILE_NAME; ?>-inr sec-inr">

		<h2 class="sec-ttl">
			<picture>
				<source srcset="./img/<?php echo $FILE_NAME; ?>/ttl.webp" type="image/webp" media="(min-width: 768px)">
				<img src="./img/<?php echo $FILE_NAME; ?>/ttl_sp.webp" alt="「5時に夢中!」とは" loading="lazy" decoding="async">
			</picture>
		</h2>

		<div class="sec-cont">

			<?php 
				include $PARTS_DIR . '/one.php';
				include $PARTS_DIR . '/two.php';
				include $PARTS_DIR . '/three.php';
			?>

		</div>

	</div>
</div>
