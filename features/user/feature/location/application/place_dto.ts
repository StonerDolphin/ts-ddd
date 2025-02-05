import type { RegionDto } from "~~/features/region/application/region_dto";

export class PlaceDto {
    constructor(public id: string,
                public city: string,
                public region: RegionDto,
                public postcode: string) {
    }
}