export class GenderException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'GenderException';
    }
}
export class InvalidGenderException extends GenderException {
    constructor() {
        super('Invalid Gender?');
        this.name = 'InvalidGenderException';
    }
}