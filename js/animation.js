let ctx = null;
let spriteList = [];

window.addEventListener("load", () => {
	let canvas = document.getElementById("canvas")
	ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	spriteList.push(new Shaman(100, 100, 7));

	tick();
});

const tick = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < spriteList.length; i++) {
		spriteList[i].tick();
	}

	window.requestAnimationFrame(tick);
}