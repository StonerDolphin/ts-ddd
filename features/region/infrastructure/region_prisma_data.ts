import type { PrismaClient, Region as RegionEntity } from "@prisma/client";
import type { RegionRepository } from "../domain/region_repository";
import { Region } from "../domain/region";

export class RegionPrismaData implements RegionRepository {
    constructor(
        readonly repo: PrismaClient
    ) { }

    async create(region: Region): Promise<void> {
        await this.repo.region.create({
            data: {
                id: region.id.value,
                name: region.name,
                // Add other fields as necessary
            }
        });
    }

    async search(name: string, offset: number, limit: number): Promise<Region[]> {
        const regions: RegionEntity[] = await this.repo.region.findMany({
            where: {
                name: {
                    contains: name,
                    mode: 'insensitive'
                }
            },
            skip: offset,
            take: limit
        });
        //@ts-ignore
        return regions.map(region => Region.fromPrimitive(region.id, region.name));
    }
}

