export class PostCodeException extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'PostCodeException';
    }
}
export class InvalidPostCodeException extends PostCodeException {
    constructor() {
        super('Invalid PostCode format \n' +
            'must be ex: 11111 or 11111-1111');
        this.name = 'InvalidPostCodeException';
    }
}