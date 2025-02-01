import {InvalidPostCodeException} from "~/features/user/feature/location/domain/Exceptions/postcode_exception";

export class PostCode {
    private constructor(readonly value: string) {}

    static create(value: string): PostCode {
        if (!/^\d{5}(-\d{4})?$/.test(value)) {
            throw new InvalidPostCodeException();
        }
        return new PostCode(value);
    }
}