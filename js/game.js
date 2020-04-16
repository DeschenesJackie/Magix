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
		document.getElementById("WAITING").style.display = "none";
		document.getElementById("SERVER_MESSAGE").innerHTML = reponse;
		document.getElementById("SERVER_MESSAGE").style.display = "block";
		if (reponse == "WAITING") {
			document.getElementById("WAITING").style.display = "block";
		}
	}
	else {
		displayGame(reponse);
	}


	setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
	})
}

window.addEventListener("load", () => {
	document.getElementById("actionZone").querySelector(".hp").onclick = heroPower;
	document.getElementById("actionZone").querySelector(".pass").onclick = passTurn;
	document.getElementById("portraitOpponent").onclick = carteOpponentClicked;
	setTimeout(state, 1000); // Appel initial (attendre 1 seconde)
});

function displayGame(reponse) {
	document.getElementById("zoneMain").innerHTML = "";
	document.getElementById("SERVER_MESSAGE").style.display = "none";
	document.getElementById("portraitOpponent").style.backgroundImage= 'url(' + getImagePortrait(reponse.opponent.heroClass) + ')';
	document.getElementById("portrait").src = getImagePortrait(reponse.heroClass);
	document.getElementById("manaJoueur").querySelector(".mana").innerHTML = reponse.mp;
	document.getElementById("vieJoueur").querySelector(".vie").innerHTML = reponse.hp;
	document.getElementById("manaOpponent").querySelector(".mana").innerHTML = reponse.opponent.mp;
	document.getElementById("vieOpponent").querySelector(".vie").innerHTML = reponse.opponent.hp;
	document.getElementById("idOpponent").querySelector(".id").innerHTML = reponse.opponent.username;

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
			if (carte.state !== "SLEEP") {
				div.style.border = "2px solid #51ff0d";
			}
			document.getElementById("zoneJoueur").appendChild(div);
		}
		document.getElementById("zoneOpponent").innerHTML = "";
		for (i in reponse.opponent.board) {
			var carte = reponse.opponent.board[i];
			var div = getCarte(carte);
			div.onclick = carteOpponentClicked;
			if (carte.mechanics.includes("Taunt")) div.style.border = "3px solid #14626c";
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
		document.getElementById("SERVER_MESSAGE").innerHTML = reponse;
		document.getElementById("SERVER_MESSAGE").style.display = "block";
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
			document.getElementById("SERVER_MESSAGE").innerHTML = reponse;
			document.getElementById("SERVER_MESSAGE").style.display = "block";
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
			div.querySelector(".zoneVie").innerHTML = carte.hp;
			div.querySelector(".zoneAttaque").innerHTML = carte.atk;
			div.querySelector(".zoneMechanic").innerHTML = carte.mechanics;
			div.querySelector(".zoneSprite").src = getImage(carte.id);
			div.querySelector(".zoneCost").innerHTML = carte.cost;
			div.querySelector(".zoneUID").innerHTML = carte.uid;
	return div;
}

function heroPower() {
	carteJoeurUID = -1;
	$.ajax({
		url: "ajax-game.php",
		type: "POST",
		data: {
			action : "HERO_POWER"
		}
	})
	.done(function (msg) {
	var reponse = JSON.parse(msg); // reponse est le message de retour de la fonction
	if (typeof reponse !== "object") {
		console.log(reponse);
		document.getElementById("SERVER_MESSAGE").innerHTML = reponse;
		document.getElementById("SERVER_MESSAGE").style.display = "block";
	}
	else {
		displayGame(reponse);
	}
	})
}

function passTurn() {
	carteJoeurUID = -1;
	$.ajax({
		url: "ajax-game.php",
		type: "POST",
		data: {
			action : "END_TURN"
		}
	})
	.done(function (msg) {
	var reponse = JSON.parse(msg); // reponse est le message de retour de la fonction
	if (typeof reponse !== "object") {
		console.log(reponse);
		document.getElementById("SERVER_MESSAGE").innerHTML = reponse;
		document.getElementById("SERVER_MESSAGE").style.display = "block";
	}
	else {
		displayGame(reponse);
	}
	})
}

function getImagePortrait(name) {
	var path;
	if (name === "Druid") {
		path = "image/portrait/Druid.gif";
	}
	else if (name === "Hunter") {
		path = "image/portrait/Hunter.gif";
	}
	else if (name === "Paladin") {
		path = "image/portrait/Paladin.gif";
	}
	else if (name === "Priest") {
		path = "image/portrait/Priest.gif";
	}
	else if (name === "Rogue") {
		path = "image/portrait/Rogue.gif";
	}
	else if (name === "Shaman") {
		path = "image/portrait/Shaman.gif";
	}
	else if (name === "Warlock") {
		path = "image/portrait/Warlock.gif";
	}
	else {
		path = "image/portrait/Warrior.gif";
	}

	return path;
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