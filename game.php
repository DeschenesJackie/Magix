<?php
	require_once("action/gameAction.php");

	$action = new gameAction();
	$data = $action->execute();

	$titre = "Magix - Partie";
	require_once("partial/header.php");
?>

<script src="js/jquery.js"></script>
<script src="js/game.js"></script>

<div id="Board">
	<div id="zoneMainOpponent"></div>

	<div id="zoneMain"></div>

	<div id="zoneJoueur"></div>

	<div id="zoneOpponent"></div>
</div>

<template id="template-carte">
	<div class="carte">
		<div class="CarteSurface"></div>
		<img class="zoneSprite" src="" alt="Image du monstre">
		<div class="zoneMechanic"></div>
		<div class="zoneVie"></div>
		<div class="zoneAttaque"></div>
		<div class="zoneUID"></div>
	</div>
</template>

<?php
	require_once("partial/footer.php");