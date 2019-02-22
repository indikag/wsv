import { Format } from './format.model';

export class Response {
    constructor(public minSize?: number, public maxSize?: number, public name?: string,
         public responseType?: string, public format?: Format[]) {
    }

}
