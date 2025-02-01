export class StateException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'StateException';
    }
}
export class InvalidStateException extends StateException {
    constructor() {
        super('Invalid format, must be ex: LA, NY, WA');
        this.name = 'InvalidStateException';
    }
}