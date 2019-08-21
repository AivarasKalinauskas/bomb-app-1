import Explosives from "./explosives.js";

export default class Bomb extends Explosives {
	constructor(elementId, canvas) {
		super(elementId, canvas, ["doAction1", "doAction2"]);
		console.log("bomb constructor");

		this.start();
	}

	start() {
		this.execute();
		this.execute();
		this.execute();
	}

	doAction1() {
		console.log("doing - doAction1");
	}

	doAction2() {
		console.log("doing - doAction2");
	}
}
