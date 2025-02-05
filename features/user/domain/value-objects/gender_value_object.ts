import { z } from "zod";
import {InvalidGenderException} from "~~/features/user/domain/exceptions/gender_exception";

export const VALUES = ["MALE", "FEMALE", "OTHER"] as const;

export class GenderType {
    private constructor(readonly value: string) {}

    static create(value: string): GenderType {
        const result = z.enum(VALUES).safeParse(value)
        if (! result.success) {
            throw new InvalidGenderException()
        }
        return new GenderType(value);
    }
}