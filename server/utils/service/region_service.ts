import { CreateRegion } from "~~/features/region/application/create_region";
import { RegionDto } from "~~/features/region/application/region_dto";
import { SearchRegion } from "~~/features/region/application/search_region";
import { Region } from "~~/features/region/domain/region";
import { RegionRepository } from "~~/features/region/domain/region_repository";

export class RegionService {
    constructor(private create: CreateRegion, private search: SearchRegion) { }
    
    async createRegion(regionDto: RegionDto): Promise<void> {
        await this.create.execute(regionDto);
    }
    async searchRegion(name: string, offset: number, limit: number): Promise<RegionDto[]> {
        const regions = await this.search.execute(name, offset, limit);
        return regions.map(region => new RegionDto(region.id.value, region.name));
    }
}