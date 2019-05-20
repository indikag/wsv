import { Format } from './format.model';

export class ComplexDataFormat {
	constructor(public minSize?: number, public maxSize?: number, public name?: string, public format?: Format[]) {}
}
