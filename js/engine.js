export class Game {
	constructor(element, width, height) {
		this.element = element;
		this.canvas = undefined;
		this.canvasWidth = width;
		this.canvasHeight = height;
		this.fps = 1000000;
	}

	start(StartingSprite) {
		this.element.innerHTML = `<canvas></canvas>`;
		this.canvas = this.element.querySelector('canvas');
		this.context = this.canvas.getContext('2d');
		this.canvas.width = this.canvasWidth;
		this.canvas.height = this.canvasHeight;

		const instance = new StartingSprite();

		setInterval(() => {
			this.context.clearRect(
				0,
				0,
				this.canvas.width,
				this.canvas.height,
			);
			this.draw(instance);
		}, (1 / this.fps) * 1000);

		setInterval(() => {
			instance.update(this);
		}, 100);
	}

	draw({ isHidden, costume, x, y, width, height }) {
		if (isHidden) return;

		this.context.drawImage(costume, x, y, width, height);
	}
}
