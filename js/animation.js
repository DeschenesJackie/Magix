let ctx = null;
let spriteList = [];

window.addEventListener("load", () => {
	let canvas = document.getElementById("canvas")
	ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	spriteList.push(new Shaman(100, 100, 7))
});

const tick = () => {
	ctx.fillStyle = "green";
	for (let i = 0; i < spriteList.length; i++) {
		spriteList[i].tick();
	}

	window.requestAnimationFrame(tick);
}