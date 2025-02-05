import { Phone } from "~~/features/user/domain/value-objects/value_object_phone";
import { UUID } from "~~/features/shared/value_object_uuid";
import { Email } from "~~/features/user/domain/value-objects/email_value_object";
import { GenderType } from "~~/features/user/domain/value-objects/gender_value_object";
import { Place } from "~~/features/user/feature/location/domain/place";

export class User {
    private constructor(
        readonly id: UUID,
        readonly username: string,
        readonly email: Email,
        readonly phone: Phone,
        readonly gender: GenderType,
        readonly place: Place
    ) { }

    static create(id: UUID,
        username: string,
        email: Email,
        phone: Phone,
        gender: GenderType,
        place: Place): User {
        return new User(id, username, email, phone, gender, place);
    }

    static fromPrimitive(id: string,
        username: string,
        email: string,
        phone: string,
        gender: string,
        place: Place): User {
        return new User(
            UUID.fromValue(id),
            username,
            Email.create(email),
            Phone.create(phone),
            GenderType.create(gender),
            place,
        );
    }
}