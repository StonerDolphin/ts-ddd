import {InvalidPostCodeException} from "~~/features/user/feature/location/domain/Exceptions/postcode_exception";

export const PostCodeRegex = /^\d{5}(-\d{4})?$/
export class PostCode {
    private constructor(readonly value: string) {}

    static create(value: string): PostCode {
        if (!PostCodeRegex.test(value)) {
            throw new InvalidPostCodeException();
        }
        return new PostCode(value);
    }
}