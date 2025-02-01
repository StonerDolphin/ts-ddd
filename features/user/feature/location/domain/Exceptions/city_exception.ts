export class CityException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'CityException';
    }
}
export class InvalidCityException extends CityException {
    constructor() {
        super('Invalid format, must be ex: Los Angeles, New York, Seattle');
        this.name = 'InvalidCityException';
    }
}