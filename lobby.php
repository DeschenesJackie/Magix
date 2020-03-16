<?php
	require_once("action/lobbyAction.php");

	$action = new lobbyAction();
	$data = $action->execute();

	$titre = "Magix - Lobby";
	require_once("partial/header.php");
?>
<a class="BoutonPratique" href="?pratique=true">
	<img src="image/heros.jpg" class="BoutonImage"></img>
</a>
<a class="BoutonDisconnect" href="?disconnect=true">
	<img src="image/heros.jpg" class="BoutonImage">PATATE</img>
</a>
<div class="ZoneChat">
	<iframe style="width:600px;height:240px;"
			src="https://magix.apps-de-cours.com/server/#/chat/<?= $_SESSION["key"] ?>">
	</iframe>
</div>

<?php
	require_once("partial/footer.php");