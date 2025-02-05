import {InvalidEmail} from "~~/features/user/domain/exceptions/email_exception";

export class Email {
    private constructor(
        readonly value: string
    ) {}

    static create(value: string): Email {
        if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)) {
            throw new InvalidEmail();
        }
        return new Email(value);
    }
}