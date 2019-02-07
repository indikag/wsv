import { Format } from './format.model';

export class Response {
    private minSize: number;
    private maxSize: number;
    private name: string;
    private format: Format[];

    public get _minSize(): number {
        return this.minSize;
    }

    public set _minSize(value: number) {
        this.minSize = value;
    }

    public get _maxSize(): number {
        return this.maxSize;
    }

    public set _maxSize(value: number) {
        this.maxSize = value;
    }

    public get _name(): string {
        return this.name;
    }

    public set _name(value: string) {
        this.name = value;
    }

    public get _format(): Format[] {
        return this.format;
    }

    public set _format(value: Format[]) {
        this.format = value;
    }
}
