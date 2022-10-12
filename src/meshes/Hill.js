import {TEXTURES} from "../index.js";
import {Mesh} from "./Mesh.js";

const TYPES = [
	{
		size: [48, 19],
		uv: [0, 40],
	}, {
		size: [80, 35],
		uv: [48, 40],
	},
];

/**
 * Hill constructor.
 * 
 * @constructor
 * @augments	Mesh
 * @return		{self}
 */
export function Hill({type = 0, position}) {
	Mesh.call(this, ...arguments);

	const {size, uv} = TYPES[type];

	return Object.assign(this, {
		vertices: new Float32Array([
			0,       size[1],
			size[0], size[1],
			0,       0,
			size[0], 0,
		]),
		size,
		texture: TEXTURES.get("assets/textures/environment.png"),
		uv,
	});
}