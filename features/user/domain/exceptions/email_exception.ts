export class EmailException extends Error {
    constructor(message: string) {
        super(message);
        this.name = "EmailException";
    }
}

export class InvalidEmail extends EmailException {
    constructor() {
        super('Invalid Email');
        this.name = "InvalidEmail";
    }
}