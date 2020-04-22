let ctx = null;
let spriteList = [];

window.addEventListener("load", () => {
	let canvas = document.getElementById("canvas")
	ctx = canvas.getContext("2d");
	canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	spriteList.push(new Shaman(canvas.width*0.2, canvas.height*0.2, 1));
	spriteList.push(new Fallen(0, 0, 3));
	tick();
});

const tick = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (let i = 0; i < spriteList.length; i++) {
		spriteList[i].tick();
		if (spriteList[i] instanceof Shaman) {
			if (spriteList[i].x < canvas.width*0.1 && spriteList[i].y < canvas.height*0.5) {
				spriteList[i].setDirection(0);
			}
			if (spriteList[i].x < canvas.width*0.1 && spriteList[i].y > canvas.height*0.7) {
				spriteList[i].setDirection(7);
			}
			if (spriteList[i].x > canvas.width*0.1 && spriteList[i].y > canvas.height*0.8) {
				spriteList[i].setDirection(6);
			}
			if (spriteList[i].x > canvas.width*0.8 && spriteList[i].y > canvas.height*0.8) {
				spriteList[i].setDirection(5);
			}
			if (spriteList[i].x > canvas.width*0.9 && spriteList[i].y < canvas.height*0.8) {
				spriteList[i].setDirection(4);
			}
			if (spriteList[i].x > canvas.width*0.9 && spriteList[i].y < canvas.height*0.3) {
				spriteList[i].setDirection(3);
			}
			if (spriteList[i].x < canvas.width*0.9 && spriteList[i].y < canvas.height*0.2) {
				spriteList[i].setDirection(2);
			}
			if (spriteList[i].x < canvas.width*0.2 && spriteList[i].y < canvas.height*0.2) {
				spriteList[i].setDirection(1);
			}
		}

	}

	window.requestAnimationFrame(tick);
}