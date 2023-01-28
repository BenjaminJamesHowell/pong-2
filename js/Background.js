export class Background {
	constructor() {
		this.height = 700;
		this.width = 900;
		this.costume = document.querySelector('.hide#background');
		this.x = -900;
		this.y = 0;
		this.isHidden = false;
	}

	update(game) {
		this.x += 10;

		if (this.x > 900) this.x = -900;

		// if (Math.random() < 0.75) this.isHidden = true;
		// else this.isHidden = false;
	}
}
