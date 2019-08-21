import Explosives from "./explosives.js";

export default class Bomb extends Explosives {
	constructor(elementId, canvas) {
		super(elementId, canvas);
		console.log("bomb constructor");
	}
}
