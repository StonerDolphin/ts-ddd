import { Region } from "~/features/region/domain/region";
import type { PlaceDto } from "~/features/user/feature/location/application/place_dto";
import { Place } from "~/features/user/feature/location/domain/place";

export class PlaceMapper {

    static toDomain(dto: PlaceDto): Place {
        return Place.fromPrimitive(
            dto.id,
            dto.city,
            Region.fromPrimitive(dto.region.id, dto.region.name),
            dto.postcode)
    }
}