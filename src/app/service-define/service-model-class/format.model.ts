import { ComplexDataFormat } from './complex-data-format.model';
import { SimpleDataFormat } from './simple-data-format.model';

export class Format {
    constructor(public name?: string, public type?: string,
         public complexDataFormat?: ComplexDataFormat, public simpleDataFormat?: SimpleDataFormat) {
	}

}
