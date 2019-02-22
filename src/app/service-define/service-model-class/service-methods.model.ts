import { Parameter } from './parameter.model';
import { Response } from './response.model';

export class ServiceMethods {
	constructor(public methodName?: string, public type?: string, public parameters?: Parameter[], public response?: Response) {
	}

}
