var carteJoeurUID = -1;

function state() {
	$.ajax({
		url : "ajax-state.php",
		type : "POST"
	})
	.done(function (msg) {
	var reponse = JSON.parse(msg);

	if (typeof reponse !== "object") {
		console.log(reponse);
		if (reponse == "GAME_NOT_FOUND") {
				// Fin de la partie. Est-ce que j’ai gagné? Je dois appeler user-info
		}
	}
	else {
		displayGame(reponse);
	}


	setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
	})
}

window.addEventListener("load", () => {
setTimeout(state, 1000); // Appel initial (attendre 1 seconde)

});

function displayGame(reponse) {
	document.getElementById("zoneMain").innerHTML = "";
		for (i in reponse.hand) {
			var carte = reponse.hand[i];
			var div = getCarte(carte);
			div.onclick = carteMainClicked;
			document.getElementById("zoneMain").appendChild(div);
		}
		document.getElementById("zoneJoueur").innerHTML = "";
		for (i in reponse.board) {
			var carte = reponse.board[i];
			var div = getCarte(carte);
			div.onclick = carteJoueurClicked;
			document.getElementById("zoneJoueur").appendChild(div);
		}
		document.getElementById("zoneOpponent").innerHTML = "";
		for (i in reponse.opponent.board) {
			var carte = reponse.opponent.board[i];
			var div = getCarte(carte);
			div.onclick = carteOpponentClicked;
			document.getElementById("zoneOpponent").appendChild(div);
		}
		console.log(reponse.hp, reponse.mp);
}

function carteMainClicked() {
	carteJoeurUID = -1;
	$.ajax({
		url: "ajax-game.php",
		type: "POST",
		data: {
			UID : this.querySelector(".zoneUID").innerHTML
		}
	})
	.done(function (msg) {
	var reponse = JSON.parse(msg); // reponse est le message de retour de la fonction
	if (typeof reponse !== "object") {
		console.log(reponse);
	}
	else {
		displayGame(reponse);
	}
	})
}

function carteOpponentClicked() {
	if (carteJoeurUID != -1) {
		$.ajax({
			url: "ajax-game.php",
			type: "POST",
			data: {
				UID : carteJoeurUID,
				targetUID : this.querySelector(".zoneUID").innerHTML
			}
		})
		.done(function (msg) {
		var reponse = JSON.parse(msg); // reponse est le message de retour de la fonction
		if (typeof reponse !== "object") {
			console.log(reponse);
		}
		else {
			displayGame(reponse);
		}
		})
	}
}

function carteJoueurClicked() {
	carteJoeurUID = this.querySelector(".zoneUID").innerHTML;
}

function getCarte(carte) {
	let html = document.getElementById("template-carte").innerHTML;
	let div = document.createElement("div");
			div.innerHTML = html;
			var vie = carte.hp + "/" + carte.baseHP;
			div.querySelector(".zoneVie").innerHTML = vie;
			div.querySelector(".zoneAttaque").innerHTML = carte.atk;
			div.querySelector(".zoneMechanic").innerHTML = carte.mechanics;
			div.querySelector(".zoneSprite").src = getImage(carte.id);
			div.querySelector(".zoneCost").innerHTML = carte.cost;
			div.querySelector(".zoneUID").innerHTML = carte.uid;
	return div
}

function getImage(id) {
	var path;
	switch (id) {
		case 1: path = "image/carteMonster/andariel.gif"; break;
		case 2: ;
		case 3: ;
		case 4: ;
		case 5: ;
		case 6: ;
		case 7: ;
		case 8: ;
		case 9: ;
		case 10: ;
		case 11: ;
		case 12: ;
		case 13: ;
		case 14: ;
		case 15: ;
		case 16: ;
		case 17: ;
		case 18: ;
		case 19: ;
		case 20: ;
		case 21: ;
		case 22: ;
		case 23: ;
		case 24: ;
		case 25: ;
		case 26: ;
		case 27: ;
		case 28: ;
		case 29: ;
		case 30: ;
		case 31: ;
		case 32: ;
		case 33: ;
		case 34: ;
		case 35: ;
		case 36: ;
		case 37: ;
		case 38: ;
		case 39: ;
		case 40: ;
		case 41: ;
		case 42: ;
		case 43: ;
		case 44: ;
		case 45: ;
		case 46: ;
		case 47: ;
		case 48: ;
		case 49: ;
		case 50: ;
		case 51: ;
		case 52: ;
		case 53: ;
		case 54: ;
		case 55: ;
		case 56: ;
		case 57: ;
		case 58: ;
		case 59: ;
		default: path = "image/carteMonster/flySci.gif";
		break;
	}
	return path;
}