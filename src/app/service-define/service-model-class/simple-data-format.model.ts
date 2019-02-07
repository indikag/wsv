export class SimpleDataFormat {
    private type: string;
    private specific: string;
    private defaultValue: string;

    public get _type(): string {
        return this.type;
    }

    public set _type(value: string) {
        this.type = value;
    }

    public get _specific(): string {
        return this.specific;
    }

    public set _specific(value: string) {
        this.specific = value;
    }

    public get _defaultValue(): string {
        return this.defaultValue;
    }

    public set _defaultValue(value: string) {
        this.defaultValue = value;
    }
}

