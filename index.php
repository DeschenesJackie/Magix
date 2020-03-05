<?php
require_once("action/indexAction.php");

	$action = new indexAction();
	$data = $action->execute();

$titre = "Magix - Login";
require_once("partial/header.php");
?>

<main id="mainLogin">
	<div id="loginPlayArea">
		<div class="zoneEntre">
			<form action="index.php" method="post">
				<div class="form-label">
					<label for="username">Nom d'usager : </label>
				</div>
				<div class="form-input">
					<input type="text" name="username" id="username" />
				</div>
				<div class="form-label">
					<label for="password">Mot de passe : </label>
				</div>
				<div class="form-input">
					<input type="password" name="password" id="password" />
				</div>
				<div class="form-input">
					<button type="submit">se Connecter</button>
				</div>
			</form>
		</div>
	</div>
</main>


<?php

require_once("partial/footer.php");
