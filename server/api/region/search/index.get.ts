import { service } from "~~/server/utils/dependencies/region";


export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    //@ts-ignore
    await service.searchRegion(query.name, query.offset, query.limit)
    return {
        statusCode: 200,
    }
})