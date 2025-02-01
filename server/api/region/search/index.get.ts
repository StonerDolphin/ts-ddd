import { service } from "~/server/dependencies/region";


export default defineEventHandler(async (event) => {
    const query = getQuery(event)
    //@ts-ignore
    await service.searchRegion(query.name, query.offset, query.limit)
    return {
        statusCode: 200,
    }
})