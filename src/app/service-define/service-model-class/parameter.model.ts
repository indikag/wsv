export class Parameter {
    private parameterName: string;
    private parameterValue: string;
    private parameterType: string;

    public get _parameterName(): string {
        return this.parameterName;
    }

    public set _parameterName(value: string) {
        this.parameterName = value;
    }

    public get _parameterValue(): string {
        return this.parameterValue;
    }

    public set _parameterValue(value: string) {
        this.parameterValue = value;
    }

    public get _parameterType(): string {
        return this.parameterType;
    }

    public set _parameterType(value: string) {
        this.parameterType = value;
    }
}
