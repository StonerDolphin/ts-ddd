import { RegionDto } from "~/features/region/application/region_dto";
import { service } from "~/server/dependencies/region";


export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const dto = new RegionDto(body.id,
        body.name)
    await service.createRegion(dto)
    return {
        statusCode: 200,
    }
})