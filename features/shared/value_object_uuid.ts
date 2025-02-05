import {v4, validate} from "uuid";
import {InvalidUUID} from "~~/features/shared/uuid_exception";

export class UUID {
    private constructor(readonly value: string) {}

    static create(): UUID {
        return new UUID(v4());
    }

    static fromValue(value: string): UUID {
        if (validate(value)){
            return new UUID(value);
        }
        throw new InvalidUUID();
    }
}