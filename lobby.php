<?php
	require_once("action/lobbyAction.php");

	$action = new lobbyAction();
	$data = $action->execute();

	$titre = "Magix - Lobby";
	require_once("partial/header.php");
?>
<div id="Lobby">
	<div id="WelcomeZone">
		Bienvenue sur Magix utilisateur <?= $data["username"] ?>.
	</div>
	<div id="ZoneButton">
		<a class="BoutonPartie" href="?pvp=true">
			<button>PVP</button>
		</a>
		<a class="BoutonPratique" href="?pratique=true">
			<button>Pratique</button>
		</a>
		<a class="BoutonDisconnect" href="?disconnect=true">
			<button>Deconnection</button>
		</a>
	</div>
	<div class="ZoneChat">
		<iframe style="width:800px;height:240px;"
				src="https://magix.apps-de-cours.com/server/#/chat/<?= $_SESSION["key"] ?>">
		</iframe>
	</div>
</div>

<?php
	require_once("partial/footer.php");