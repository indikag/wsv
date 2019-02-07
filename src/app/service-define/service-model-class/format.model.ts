import { ComplexDataFormat } from './complex-data-format.model';
import { SimpleDataFormat } from './simple-data-format.model';

export class Format {
    private name: string;
    private type: string;
    private complexDataFormat: ComplexDataFormat;
    private simpleDataFormat: SimpleDataFormat;

    public get _name(): string {
        return this.name;
    }

    public get _type(): string {
        return this.type;
    }

    public get _complexDataFormat(): ComplexDataFormat {
        return this.complexDataFormat;
    }

    public get _simpleDataFormat(): SimpleDataFormat {
        return this.simpleDataFormat;
    }

    public set _name(name: string) {
        this.name = name;
    }

    public set _type(type: string) {
        this.type = type;
    }

    public set _complexDataFormat(complexDataFormat: ComplexDataFormat) {
        this.complexDataFormat = complexDataFormat;
    }

    public set _simpleDataFormat(simpleDataFormat: SimpleDataFormat) {
        this.simpleDataFormat = simpleDataFormat;
    }
}
