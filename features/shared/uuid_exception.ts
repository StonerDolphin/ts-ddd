export class UuidException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "UuidException";
    }
}
export class InvalidUUID extends UuidException {
    constructor() {
        super('Invalid UUID');
        this.name = "InvalidUUID";
    }
}