import {InvalidGenderException} from "~/features/user/domain/exceptions/gender_exception";

export class GenderType {
    private constructor(readonly value: string) {}

    static create(value: string): GenderType {
        if (!/(?:FEMALE|MALE|OTHER)$/.test(value)) {
            throw new InvalidGenderException()
        }
        return new GenderType(value);
    }
}