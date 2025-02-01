import { Region } from "../domain/region";
import type { RegionRepository } from "../domain/region_repository";
import type { RegionDto } from "./region_dto";

export class CreateRegion {
    constructor(
        private readonly regionRepository: RegionRepository
    ) { }

    async execute(region: RegionDto): Promise<void> {
        await this.regionRepository.create(Region.fromPrimitive(region.id, region.name));
    }
}