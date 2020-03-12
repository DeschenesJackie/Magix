function state() {
	$.ajax({
		url : "ajax-state.php",
		type : "POST"
	})
	.done(function (msg) {
	var reponse = JSON.parse(msg);

	console.log(reponse["hp"], reponse["mp"]);

	setTimeout(state, 1000); // Attendre 1 seconde avant de relancer l’appel
	})
}

window.addEventListener("load", () => {
setTimeout(state, 1000); // Appel initial (attendre 1 seconde)

});