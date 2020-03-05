<?php
	require_once("action/lobbyAction.php");

	$action = new lobbyAction();
	$data = $action->execute();

	$titre = "Lobby";
	require_once("partial/header.php");
?>

<div class="ZoneChat">
	<iframe style="width:600px;height:240px;"
			src="https://magix.apps-de-cours.com/server/#/chat/<?= $_SESSION["key"] ?>">
	</iframe>
</div>

<?php
	require_once("partial/footer.php");