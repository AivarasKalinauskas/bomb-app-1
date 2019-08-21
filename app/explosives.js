export default class Explosives {
	constructor(elementId, canvas) {
		this.elementId = elementId;
		this.canvas = canvas;
		console.log("explosives constructor", this.elementId, this.canvas);

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
}
