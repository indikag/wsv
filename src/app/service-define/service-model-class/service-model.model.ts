import { ServiceMethods } from './service-methods.model';

export class ServiceModel {
	constructor(public serviceName?: string, public serviceDescription?: string, public serviceMethods?: ServiceMethods[]) {}
}
