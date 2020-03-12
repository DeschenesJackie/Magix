<?php
	require_once("action/gameAction.php");

	$action = new gameAction();
	$data = $action->execute();

	$titre = "Magix - Partie";
	require_once("partial/header.php");
?>

<script src="js/game.js"></script>

<?php
	require_once("partial/footer.php");