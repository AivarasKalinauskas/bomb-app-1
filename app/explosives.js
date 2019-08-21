export default class Explosives {
	constructor(elementId, canvas, actions) {
		this.elementId = elementId;
		this.canvas = canvas;
		this.actions = actions;
		console.log(
			"explosives constructor",
			this.elementId,
			this.canvas,
			this.actions
		);

		this.init();
	}

	init() {
		this.canvas.append(this.createSvgElement());
	}

	createSvgElement() {
		let svg = '<svg><use xlink:href="#' + this.elementId + '"></use></svg>';
		let el = document.createElement("div");
		el.classList.add("icon");
		el.innerHTML = svg;
		return el;
	}

	execute() {
		if (this.actions.length) {
			let action = this.actions.shift();
			this[action]();
		} else {
			console.error("fail: no action left to execute");
		}
	}
}
