
import {service} from "~/server/dependencies/user";


export default defineEventHandler( async ( event ) => {
    const body = await readBody(event)
    await service.login(body.email, body.password)
    return {
        statusCode: 200,
    }
})