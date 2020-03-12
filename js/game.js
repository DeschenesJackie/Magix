function state() {
	$.ajax({
		url : "ajax-state.php",
		type : "POST"
	})
	.done(function (msg) {
	var reponse = JSON.parse(msg);

	if (typeof reponse !== "object") {
		if (reponse == "GAME_NOT_FOUND") {
				// Fin de la partie. Est-ce que j’ai gagné? Je dois appeler user-info
		}
	}
	else {
		console.log(reponse.hp, reponse.mp);
		// maVariable est un objet. On pourrait faire, par exemple, maVariable.game.hp ou
		// maVariable.player.mp
	}



	setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
	})
}

window.addEventListener("load", () => {
setTimeout(state, 1000); // Appel initial (attendre 1 seconde)

});