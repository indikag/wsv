import { ServiceMethods } from './service-methods.model';

export class ServiceModel {
    private serviceName: string;
    private serviceDescription: string;
    private serviceMethods: ServiceMethods[];

    public get _serviceName(): string {
        return this.serviceName;
    }

    public get _serviceDescription(): string {
        return this.serviceDescription;
    }

    public get _serviceMethods(): ServiceMethods[] {
        return this.serviceMethods;
    }

    public set _serviceName(serviceName: string) {
        this.serviceName = serviceName;
    }

    public set _serviceDescription(serviceDescription: string) {
        this.serviceDescription = serviceDescription;
    }

    public set _serviceMethods(serviceMethods: ServiceMethods[]) {
        this.serviceMethods = serviceMethods;
    }

}
