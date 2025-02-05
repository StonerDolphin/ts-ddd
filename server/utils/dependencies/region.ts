import { CreateRegion } from "~~/features/region/application/create_region"
import { SearchRegion } from "~~/features/region/application/search_region"
import { RegionRepository } from "~~/features/region/domain/region_repository"
import { RegionPrismaData } from "~~/features/region/infrastructure/region_prisma_data"
import { RegionService } from "../service/region_service"
import prisma from "~~/lib/prisma"

const repo: RegionRepository = new RegionPrismaData(prisma)
const createRegion = new CreateRegion(repo)
const searchRegion = new SearchRegion(repo)
export const service = new RegionService(createRegion, searchRegion)