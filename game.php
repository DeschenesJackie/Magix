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
	<div id="SERVER_MESSAGE"></div>
	<div id="WAITING"></div>

	<div id="vieJoueur"><p class="vie">30</p></div>
	<div id="manaJoueur"><p class="mana">1</p></div>

	<img id="portrait" src="" alt="Portrait du Hero Joueur">
	<div id="actionZone">
		<button class="hp">Hero Power</button>
		<button class="pass">Passer</button>
	</div>

	<div id="opponentInfo">
		<div id="vieOpponent"><p class="vie">30</p></div>
		<div id="manaOpponent"><p class="mana">1</p></div>
		<div id="portraitOpponent"><div class="zoneUID">0</div></div>
		<div id="idOpponent"><p class="id">Potato</p></div>
		<div class="zoneUID"></div>
	</div>

	<div id="zoneMainOpponent"></div>

	<div id="zoneMain"></div>

	<div id="zoneJoueur"></div>

	<div id="zoneOpponent"></div>
</div>

<template id="template-carte">
	<div class="carte">
		<div class="CarteSurface"></div>
		<img class="zoneSprite" src="" alt="Image du monstre">
		<div class="zoneCost"></div>
		<div class="zoneMechanic"></div>
		<div class="zoneVie"></div>
		<div class="zoneAttaque"></div>
		<div class="zoneUID"></div>
	</div>
</template>

<?php
	require_once("partial/footer.php");