import type { Region } from "./region";

export interface RegionRepository {

    create(region: Region): Promise<void>;

    search(name: string, offset: number, limit:number): Promise<Region[]>;
    
}