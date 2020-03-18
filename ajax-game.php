<?php
	require_once("action/ajax-gameAction.php");

	$action = new ajaxGameAction();
	$data = $action->execute();

	echo json_encode($data["result"]);
?>
