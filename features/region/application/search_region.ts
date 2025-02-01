import type { Region } from "../domain/region";
import type { RegionRepository } from "../domain/region_repository";

export class SearchRegion {
    constructor( readonly regionRepository: RegionRepository ) { }

    async execute(name: string, offset: number, limit:number): Promise<Region[]> {
        return await this.regionRepository.search(name, offset, limit);
    }
}