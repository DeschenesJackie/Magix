class Shaman {
	constructor(x, y, direction) {
		this.sprite = new TiledImage("image/ShamanWalk.png", 14, 8, 100, true, 1.0);

		this.x = x;
		this.y = y;

		this.setDirection(direction);

	}

	setDirection(dir) {

		this.sprite.changeRow(dir)
		this.sprite.changeMinMaxInterval(1, 14);

		switch(dir) {
			case 0:
				this.speedX = 0;
				this.speedY = 1;
				break;
			case 1:
				this.speedX = -0.5;
				this.speedY = 0.5;
				break;
			case 2:
				this.speedX = -1;
				this.speedY = 0;
				break;
			case 3:
				this.speedX = -0.5;
				this.speedY = -0.5;
				break;
			case 4:
				this.speedX = 0;
				this.speedY = -1;
				break;
			case 5:
				this.speedX = 0.5;
				this.speedY = -0.5;
				break;
			case 6:
				this.speedX = 1;
				this.speedY = 0;
				break;
			case 7:
				this.speedX = 0.5;
				this.speedY = 0.5;
		}
	}

	tick() {
		this.nX = this.x + this.speedX;
		this.nY = this.y + this.speedY;

		this.x = this.nX;
		this.y = this.nY;

		this.sprite.tick(ctx, this.x, this.y)

		return true;
	}
}

class Fallen {
	constructor(x, y, direction) {
		this.sprite = new TiledImage("image/FallenWalk.png", 10, 8, 100, true, 1.0);

		this.x = x;
		this.y = y;

		this.setDirection(direction);

	}

	setDirection(dir) {

		this.sprite.changeRow(dir)
		this.sprite.changeMinMaxInterval(1, 10);

		switch(dir) {
			case 0:
				this.speedX = 0;
				this.speedY = 1;
				break;
			case 1:
				this.speedX = 0.5;
				this.speedY = -0.5;
				break;
			case 2:
				this.speedX = 1;
				this.speedY = 0;
				break;
			case 3:
				this.speedX = 0.5;
				this.speedY = 0.5;
				break;
			case 4:
				this.speedX = 0;
				this.speedY = -1;
				break;
			case 5:
				this.speedX = -0.5;
				this.speedY = 0.5;
				break;
			case 6:
				this.speedX = -1;
				this.speedY = 0;
				break;
			case 7:
				this.speedX = -0.5;
				this.speedY = -0.5;
		}
	}

	tick() {
		this.nX = this.x + this.speedX;
		this.nY = this.y + this.speedY;

		this.x = this.nX;
		this.y = this.nY;

		this.sprite.tick(ctx, this.x, this.y)

		return true;
	}
}