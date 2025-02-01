import { UUID } from "~/features/shared/value_object_uuid";
import { PostCode } from "~/features/user/feature/location/domain/value_objects/postcode_value_object";
import { State } from "~/features/user/feature/location/domain/value_objects/state_value_object";
import { City } from "~/features/user/feature/location/domain/value_objects/city_value_object";
import type { Region } from "~/features/region/domain/region";

export class Place {
    private constructor(
        readonly id: UUID,
        readonly city: City,
        readonly region: Region,
        readonly postcode: PostCode,
    ) { }

    static create(id: UUID,
        city: City,
        region: Region,
        postcode: PostCode): Place {
        return new Place(id, city, region, postcode);
    }

    static fromPrimitive(id: string,
        city: string,
        region: Region,
        postcode: string): Place {
        return new Place(
            UUID.fromValue(id),
            City.create(city),
            region,
            PostCode.create(postcode));
    }
}