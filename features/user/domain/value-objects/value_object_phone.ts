import {InvalidPhoneFormat} from "~~/features/user/domain/exceptions/phone_exception";

export const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\\s\\./0-9]*$/g

export class Phone{
    private constructor(
        readonly value: string,
    ) {}

    /**
     * @param value
     * @throws InvalidPhoneFormat
     */
    static create(value: string): Phone {
        if (!phoneRegex.test(value)) {
            throw new InvalidPhoneFormat();
        }
        return new Phone(value);
    }
}