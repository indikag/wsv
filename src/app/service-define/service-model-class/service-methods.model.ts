import { Parameter } from './parameter.model';
import { Response } from './response.model';

export class ServiceMethods {
    private methodName: string;
    private type: string;
    private parameters: Parameter[];
    private response: Response[];

    public get _methodName(): string {
        return this.methodName;
    }

    public set _methodName(value: string) {
        this.methodName = value;
    }

    public get _type(): string {
        return this.type;
    }

    public set _type(value: string) {
        this.type = value;
    }

    public get _parameters(): Parameter[] {
        return this.parameters;
    }

    public set _parameters(value: Parameter[]) {
        this.parameters = value;
    }

    public get _response(): Response[] {
        return this.response;
    }

    public set _response(value: Response[]) {
        this.response = value;
    }
}
