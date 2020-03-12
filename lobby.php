<?php
	require_once("action/lobbyAction.php");

	$action = new lobbyAction();
	$data = $action->execute();

	$titre = "Lobby";
	require_once("partial/header.php");
?>
<a href="?pratique=true">
	<img src="image/heros.jpg" class="BoutonImage"></img>
</a>
<a href="?pratique=true">
	<img src="image/heros.jpg" class="BoutonImage"></img>
</a>
<div class="ZoneChat">
	<iframe style="width:600px;height:240px;"
			src="https://magix.apps-de-cours.com/server/#/chat/<?= $_SESSION["key"] ?>">
	</iframe>
</div>

<?php
	require_once("partial/footer.php");