export class PhoneException extends Error {
    constructor(message: string) {
        super(message)
        this.name = "PhoneException";
    }
}

export class InvalidPhoneFormat extends PhoneException {
    constructor() {
        super('Invalid phone format');
        this.name = "InvalidPhoneFormat";
    }
}